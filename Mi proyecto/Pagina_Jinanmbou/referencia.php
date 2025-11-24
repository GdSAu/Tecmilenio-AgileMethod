<?php
session_start();
require_once 'config.php';

if (empty($_SESSION['email'])) {
    header("Location: usuarios.php");
    exit();
}

// buscar el último pedido del usuario cuyo Estado = 'En Preparacion'
$miEmail = $_SESSION['email'];
$pedidoEncontrado = null;

if (isset($conn_pedidos) && $conn_pedidos instanceof mysqli) {
    $sql = "SELECT id, Pedido, Estado, created_at FROM pedidos WHERE Estado = 'En Preparacion' ORDER BY id DESC";
    if ($res = $conn_pedidos->query($sql)) {
        while ($row = $res->fetch_assoc()) {
            $data = json_decode($row['Pedido'], true);
            if (!is_array($data)) continue;
            // comparar por email guardado en el JSON del pedido
            $emailPedido = $data['email'] ?? ($data['Email'] ?? '');
            if ($emailPedido === $miEmail) {
                $pedidoEncontrado = [
                    'db_id' => (int)$row['id'],
                    'number' => $data['number'] ?? $data['number'] ?? ($row['id']),
                    'items' => $data['items'] ?? [],
                    'total' => $data['total'] ?? 0.0,
                    'created_at' => $row['created_at'],
                    'estado' => $row['Estado'] ?? 'En Preparacion',
                ];
                break; // el último (ORDER BY id DESC)
            }
        }
        $res->free();
    } else {
        error_log("Query pedidos failed: " . $conn_pedidos->error);
    }
} else {
    error_log("Conexion a pedidos_db no disponible.");
}


?>

<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="https://getbootstrap.com/docs/5.3/assets/css/docs.css" rel="stylesheet">
    <title>Pago</title>
    <script defer src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js"></script>
  </head>
  <body class="bg-success"  style="--bs-bg-opacity: .60;">
    <nav class="navbar navbar-expand-lg bg-light text-dark">
      <div class="container-fluid">
      <a class="navbar-brand" href="index.php"><img src="images/logo.jpg" alt="Jinambou" width="50" height="50"></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" href="menu.php">Menu</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Perfil
              </a>
              <ul class="dropdown-menu">
                <li>
                  <?php if (!empty($_SESSION['email'])): ?>
                    <a class="dropdown-item" href="perfil.php"><?= htmlspecialchars($_SESSION['name'] ?? 'Usuario') ?></a>
                  <?php else: ?>
                    <a class="dropdown-item" href="usuarios.php">Iniciar sesión</a>
                  <?php endif; ?>
                </li>
                 <li><a class="dropdown-item" href="carrito.php">Carrito</a></li>
                <li><button oneclick="window.location.href='cerrar_sesion.php'"> <a class="dropdown-item" href="index.php">Cerrar Sesion</a></button></li>
            </li>
          </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div class="container mt-4">
      <div class="card shadow-sm" id="receipt-content">
        <div class="card-body text-center">
          <h1 class="h4 mb-0"><?= htmlspecialchars($_SESSION['name'] ?? '') ?>, referencia de pago</h1>
        </div>
      </div>
    </div>

    <main class="container mt-3">
      <div class="card shadow-sm">
        <div class="card-body">
          <?php if (empty($pedidoEncontrado)): ?>
            <p>No se encontró ningún pedido activo en este momento.</p>
            <a class="btn btn-primary" href="menu.php">Volver al menú</a>
          <?php else: ?>
            <h4>Pedido #<?= htmlspecialchars($pedidoEncontrado['number']) ?></h4>
            <p><small class="text-muted">Fecha: <?= htmlspecialchars($pedidoEncontrado['created_at']) ?></small></p>

            <h5>Contenido del pedido</h5>
            <ul class="list-group mb-3">
              <?php foreach ($pedidoEncontrado['items'] as $it): ?>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <div>
                    <strong><?= htmlspecialchars($it['title'] ?? '') ?></strong>
                    <div class="small text-muted">Cantidad: <?= intval($it['qty'] ?? 1) ?></div>
                  </div>
                  <div>$<?= number_format(($it['price'] ?? 0) * ($it['qty'] ?? 1), 2) ?></div>
                </li>
              <?php endforeach; ?>
            </ul>

            <div class="mb-3">
              <strong>Total a pagar: $<?= number_format($pedidoEncontrado['total'], 2) ?></strong>
            </div>

            <h5>Pago por transferencia</h5>
            <p>Cuenta bancaria: <strong>Banco Ejemplo - 1234567890</strong></p>
            <p>Número de referencia (usar en la transferencia): <strong><?= htmlspecialchars($pedidoEncontrado['number']) ?></strong></p>

            <h5 class="mt-3">Pago en efectivo</h5>
            <p>Puedes también pagar en efectivo al momento de la entrega.</p>

            <!-- ADICIÓN: aviso grande y botón Obtener recibo (mejorado) -->
           <div class="mt-4 text-center">
              <h2 class="text-danger fw-bold display-6">Es necesario descargar el recibo para reclamar tu pedido</h2>
              <p class="small text-muted">Guarda el recibo y presenta el número de referencia al recoger tu pedido.</p>

              <button id="download-receipt" class="btn btn-outline-primary btn-lg" type="button">
                Obtener recibo (PDF)
              </button>
            </div>

            <!-- load html2pdf (client-side PDF generation) -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js" integrity="sha512-GsLlZN/3F2ErC5ifS5QtgpiJtWd43JWSuIgh7mbzZ8zBps+dvLusV+eNQATqgA/HdeKFVgA5v3S/cIrLF7QnIg==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
<script>
(function(){
  const btn = document.getElementById('download-receipt');
  if (!btn) return;

  btn.addEventListener('click', async () => {
    btn.disabled = true;
    const original = btn.innerText;
    btn.innerText = 'Preparando PDF...';

    try {
      // ocultar elementos que no quieras en el PDF (el botón mismo)
      btn.style.display = 'none';

      // elemento a capturar: usar body para capturar la página completa
      const element = document.body;
      if (!element) throw new Error('No se encontró el contenido para generar el PDF.');

      // esperar a que imágenes carguen
      const imgs = Array.from(element.querySelectorAll('img'));
      await Promise.all(imgs.map(img => new Promise(resolve => {
        if (img.complete) return resolve();
        img.onload = img.onerror = resolve;
      })));

      const pedidoNum = <?= intval($pedidoEncontrado['number'] ?? $pedidoEncontrado['db_id'] ?? 0) ?>;
      const filename = 'recibo_pedido_' + pedidoNum + '.pdf';

      const opt = {
        margin:       [10,10,10,10],
        filename:     filename,
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  {
          scale: 2,
          useCORS: true,
          allowTaint: false,
          // asegurar ancho completo para evitar cortes
          windowWidth: Math.max(document.documentElement.scrollWidth, document.body.scrollWidth)
        },
        jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' }
      };

      // generar y guardar PDF desde body (página completa)
      await html2pdf().set(opt).from(element).save();
    } catch (e) {
      console.error(e);
      alert('Error al generar el PDF: ' + (e.message || e));
    } finally {
      // restaurar botón
      btn.style.display = '';
      btn.disabled = false;
      btn.innerText = original;
    }
  });
})();
</script>

            <div class="mt-4 d-flex gap-2">
              <a class="btn btn-secondary" href="menu.php">Seguir comprando</a>
              <a class="btn btn-success" href="carrito.php">Ver carrito</a>
            </div>
          <?php endif; ?>
        </div>
      </div>
    </main>
  </body>
</html>