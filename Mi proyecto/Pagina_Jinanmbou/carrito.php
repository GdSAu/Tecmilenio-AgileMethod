<?php
session_start();

// bloquear acceso si no hay usuario autenticado
if (empty($_SESSION['email'])) {
    header("Location: usuarios.php");
    exit();
}
?>
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="https://getbootstrap.com/docs/5.3/assets/css/docs.css" rel="stylesheet">
    <title>Carrito</title>
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
                <li><a class="dropdown-item" href="cerrar_sesion.php">Cerrar Sesión</a></li>
              </ul>
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
          <h2>Este es tu carrito:</h2>

          <?php
          $cart = $_SESSION['cart'] ?? [];
          if (empty($cart)) {
              echo '<p>No hay productos en el carrito.</p>';
          } else {
              $total = 0.0;
              echo '<div class="list-group mb-3">';
              foreach ($cart as $item) {
                  $qty = intval($item['qty'] ?? 1);
                  $line = ($item['price'] ?? 0) * $qty;
                  $total += $line;
                  echo '<div class="list-group-item d-flex justify-content-between align-items-center">';
                  echo '<div>';
                  echo '<strong>' . htmlspecialchars($item['title'] ?? '') . '</strong>';
                  echo '<div class="small">Precio: $' . number_format($item['price'] ?? 0, 2) . ' x ' . $qty . '</div>';
                  echo '</div>';
                  echo '<div>$' . number_format($line, 2) . '</div>';
                  echo '</div>';
              }
              echo '</div>';
              echo '<div class="d-flex justify-content-end"><h5>Total: $' . number_format($total, 2) . '</h5></div>';
          }
          ?>
          <div class="mt-3">
            <a class="btn btn-secondary" href="menu.php">Seguir comprando</a>
            <a class="btn btn-primary" href="pagos.php">Pagar</a>
          </div>
        </div>
      </div>
    </main>

  </body>
</html>