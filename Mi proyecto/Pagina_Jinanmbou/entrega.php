<?php
session_start();
require_once 'config.php';

if (empty($_SESSION['email'])) {
    http_response_code(401);
    echo json_encode(['error' => 'Sin autorización']);
    exit();
}

$orders = [];
if (isset($conn_pedidos) && $conn_pedidos instanceof mysqli) {
    $q = $conn_pedidos->query("SELECT id, Pedido, Estado, created_at FROM pedidos WHERE Estado = 'Listo' ORDER BY id ASC");
    if ($q) {
        while ($row = $q->fetch_assoc()) {
            $data = json_decode($row['Pedido'], true);
            if (!is_array($data)) continue;
            $orders[] = [
                'db_id' => (int)$row['id'],
                'number' => $data['number'] ?? null,
                'name' => $data['name'] ?? ($data['email'] ?? ''),
                'items' => $data['items'] ?? [],
                'total' => $data['total'] ?? 0.0,
                'created_at' => $row['created_at'],
                'estado' => $row['Estado'] ?? 'Listo',
            ];
        }
        $q->free();
    }
}
header("Refresh: 5");
?>

<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="https://getbootstrap.com/docs/5.3/assets/css/docs.css" rel="stylesheet">
    <title>Entrega</title>
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
              <a class="nav-link disabled" href="menu.php">Menu</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Perfil
              </a>
              <ul class="dropdown-menu">
                <li>
                  <?php if (!empty($_SESSION['email'])): ?>
                    <a class="dropdown-item" href="perfil_empleado.php"><?= htmlspecialchars($_SESSION['name'] ?? 'Usuario') ?></a>
                  <?php else: ?>
                    <a class="dropdown-item" href="usuarios.php">Iniciar sesión</a>
                  <?php endif; ?>
                </li>
                <li><a class="dropdown-item" href="entrega.php">Caja</a></li>
                <li><a class="dropdown-item" href="pedidos.php">Cocina</a></li>
                <li><button oneclick="window.location.href='cerrar_sesion.php'"> <a class="dropdown-item" href="index.php">Cerrar Sesion</a></button></li>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  <div class="container mt-4">
      <div class="card shadow-sm">
        <div class="card-body text-center">
          <h1 class="h4 mb-0"><?= htmlspecialchars($_SESSION['name'] ?? '') ?>, bienvenido</h1>
        </div>
      </div>
    </div>

  <main class="container mt-3">
    <div class="card shadow-sm">
      <div class="card-body">
        <h2>Pedidos Listos para Entrega</h2>

        <!-- antes: salida de pedidos estática -->
                <!-- ahora: contenedor con id que el JS actualizará dinámicamente -->
                <div id="orders-list">
                  <?php if (empty($orders)): ?>
                    <p>No hay ordenes listas</p>
                  <?php else: ?>
                    <div class="list-group">
                      <?php foreach ($orders as $ord): ?>
                        <div class="list-group-item">
                          <div class="d-flex w-100 justify-content-between align-items-center">
                            <div>
                              <h5 class="mb-1">Pedido #<?= htmlspecialchars($ord['number'] ?? $ord['db_id']) ?></h5>
                              <small class="text-muted">Cliente: <?= htmlspecialchars($ord['name']) ?></small>
                            </div>
                            <div class="text-end">
                              <small class="text-muted"><?= htmlspecialchars($ord['created_at']) ?></small>
                            </div>
                          </div>

                          <ul class="mb-2 mt-2">
                            <?php foreach ($ord['items'] as $it): ?>
                              <li><?= htmlspecialchars($it['title'] ?? '') ?> — <?= intval($it['qty'] ?? 1) ?> x $<?= number_format($it['price'] ?? 0, 2) ?></li>
                            <?php endforeach; ?>
                          </ul>

                          <div class="d-flex justify-content-between align-items-center">
                            <strong>Total: $<?= number_format($ord['total'], 2) ?></strong>

                            <div class="d-flex gap-2">
                              <form method="post" action="cambiar_estado.php" style="margin:0;">
                                <input type="hidden" name="id" value="<?= intval($ord['db_id']) ?>">
                                <input type="hidden" name="estado" value="Entregado">
                                <button type="submit" class="btn btn-sm btn-primary">Marcar Entregado</button>
                              </form>
                            </div>
                          </div>
                        </div>
                      <?php endforeach; ?>
                    </div>
                  <?php endif; ?>
                </div>
    </div>
  </main>

  </body>
</html>