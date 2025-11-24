
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="https://getbootstrap.com/docs/5.3/assets/css/docs.css" rel="stylesheet">
    <title>Menu</title>
    <script defer src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js"></script><link rel="stylesheet" href="styles.css" />
    <script src="store.js" async></script>
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
<section class="container content-section">
            <h2 class="section-header">Opcion 1</h2>
            <div class="shop-items">
                <div class="shop-item">
                    <span class="shop-item-title">P1</span>
                    <img class="shop-item-image" src="images/logo.jpg" alt="P1">
                    <div class="shop-item-details">
                        <span class="shop-item-price">12.99</span>
                        <form action="añadir_a_carrito.php" method="post" class="d-inline">
                          <input type="hidden" name="title" value="P1">
                          <input type="hidden" name="price" value="12.99">
                          <button class="btn btn-primary shop-item-button" type="submit">Agregar al Carrito</button>
                        </form>
                    </div>
                </div>
                <div class="shop-item">
                    <span class="shop-item-title">P2</span>
                    <img class="shop-item-image" src="images/logo.jpg" alt="P2">
                    <div class="shop-item-details">
                        <span class="shop-item-price">$14.99</span>
                        <form action="añadir_a_carrito.php" method="post" class="d-inline">
                          <input type="hidden" name="title" value="P2">
                          <input type="hidden" name="price" value="14.99">
                        <button class="btn btn-primary shop-item-button"type="submit">Agregar al Carrito</button>
                        </form>
                    </div>
                </div>
                <div class="shop-item">
                    <span class="shop-item-title">P3</span>
                    <img class="shop-item-image" src="images/logo.jpg" alt="P3">
                    <div class="shop-item-details">
                        <span class="shop-item-price">$9.99</span>
                        <form action="añadir_a_carrito.php" method="post" class="d-inline">
                          <input type="hidden" name="title" value="P3">
                          <input type="hidden" name="price" value="9.99">
                        <button class="btn btn-primary shop-item-button"type="submit">Agregar al Carrito</button>
                        </form>
                    </div>
                </div>
                <div class="shop-item">
                    <span class="shop-item-title">P4</span>
                    <img class="shop-item-image" src="images/logo.jpg" alt="P4">
                    <div class="shop-item-details">
                        <span class="shop-item-price">$19.99</span>
                        <form action="añadir_a_carrito.php" method="post" class="d-inline">
                          <input type="hidden" name="title" value="P4">
                          <input type="hidden" name="price" value="14.99">
                        <button class="btn btn-primary shop-item-button"type="submit">Agregar al Carrito</button>
                        </form>
                      </div>
                </div>
            </div>
        </section>
        <section class="container content-section">
            <h2 class="section-header">Opcion 2</h2>
            <div class="shop-items">
                <div class="shop-item">
                    <span class="shop-item-title">P5</span>
                    <img class="shop-item-image" src="images/logo.jpg" alt="P5">
                    <div class="shop-item-details">
                        <span class="shop-item-price">$19.99</span>
                        <form action="añadir_a_carrito.php" method="post" class="d-inline">
                          <input type="hidden" name="title" value="P5">
                          <input type="hidden" name="price" value="14.99">
                        <button class="btn btn-primary shop-item-button"type="submit">Agregar al Carrito</button>
                        </form>
                    </div>
                </div>
                <div class="shop-item">
                    <span class="shop-item-title">P6</span>
                    <img class="shop-item-image" src="images/logo.jpg" alt="P6">
                    <div class="shop-item-details">
                        <span class="shop-item-price">$6.99</span>
                        <form action="añadir_a_carrito.php" method="post" class="d-inline">
                          <input type="hidden" name="title" value="P6">
                          <input type="hidden" name="price" value="6.99">
                        <button class="btn btn-primary shop-item-button"type="submit">Agregar al Carrito</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
  </body>
</html>