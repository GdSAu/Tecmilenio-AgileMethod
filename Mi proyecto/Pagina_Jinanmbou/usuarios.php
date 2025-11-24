<?php

session_start();

$errors= [
  'login'=>$_SESSION['login_error'] ?? ' ',
  'register'=>$_SESSION['register_error'] ?? ' ',
];
$active_form = $_SESSION['active_form'] ?? 'login';


function showError($error){
  return !empty($error) ? "<p class='error-message'> $error </p>" : '';
}
unset($_SESSION['login_error'], $_SESSION['register_error'], $_SESSION['active_form']);

function isActiveTab($formName, $activeForm){
  return $formName === $activeForm ? 'active' : '';
}
?>
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="https://getbootstrap.com/docs/5.3/assets/css/docs.css" rel="stylesheet">
    <title>Inicio de Sesion</title>
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
              </ul>
              </li>
          </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
<main class="d-flex justify-content-center align-items-center" style="min-height:70vh;">
  <div class="card shadow-sm" style="width:100%; max-width:540px;">
    <div class="card-body">
      <!-- Tabs -->
      <ul class="nav nav-tabs mb-3" id="authTabs" role="tablist">
        <li class="nav-item" role="presentation">
          <button class="nav-link active" id="login-tab" data-bs-toggle="tab" data-bs-target="#loginPane" type="button" role="tab" aria-controls="loginPane" aria-selected="true">Entrar</button>
        </li>
        <li class="nav-item" role="presentation">
          <button class="nav-link" id="register-tab" data-bs-toggle="tab" data-bs-target="#registerPane" type="button" role="tab" aria-controls="registerPane" aria-selected="false">Registrar</button>
        </li>
      </ul>

      <div class="tab-content">
        <!-- Login tab -->
        <div class="tab-pane fade show active" <?= isActiveTab('login',$active_form)?> id="loginPane" role="tabpanel" aria-labelledby="login-tab">
          <form id="loginForm" action="usuarios_registro.php" method="post" novalidate>
            <h2>Inicio de Sesion</h2>
            <?= showError($errors['login']); ?>
            <div class="mb-3">
              <label for="loginEmail" class="form-label">Correo</label>
              <input type="email" class="form-control" id="loginEmail" name="Correo" placeholder="correo@ejemplo.com" required>
              <div class="invalid-feedback">Ingrese un correo válido.</div>
            </div>
            <div class="mb-2">
              <label for="loginPassword" class="form-label">Contraseña</label>
              <input type="password" class="form-control" id="loginPassword" name="Contraseña" placeholder="Contraseña" required>
              <div class="invalid-feedback">Ingrese su contraseña.</div>
            </div>
            <div class="d-flex justify-content-between align-items-center mt-3">
              <a href="recuperacion.php" class="small">Recuperar contraseña</a>
              <button type="submit" class="btn btn-primary" name="login">Entrar</button>
            </div>
          </form>
        </div>

        <!-- Register tab -->
        <div class="tab-pane fade"<?= isActiveTab('registro',$active_form)?> id="registerPane" role="tabpanel" aria-labelledby="register-tab">
          <form id="registerForm" action="usuarios_registro.php" method="post" novalidate>
            <h2>Registro de Usuario</h2>
            <?= showError($errors['register']); ?>
            <div class="mb-3">
              <label for="regEmail" class="form-label">Correo</label>
              <input type="email" class="form-control" id="regEmail" name="Correo" placeholder="correo@ejemplo.com" required>
              <div class="invalid-feedback">Ingrese un correo válido.</div>
            </div>
            <div class="mb-3">
              <label for="regName" class="form-label">Nombre del alumno</label>
              <input type="text" class="form-control" id="regName" name="Nombre" placeholder="Nombre completo" required>
              <div class="invalid-feedback">Ingrese el nombre del alumno.</div>
            </div>
            <div class="mb-3">
              <label for="regId" class="form-label">Contraseña</label>
              <input type="text" class="form-control" id="regId" name="Contraseña" placeholder="Contraseña" required>
              <div class="invalid-feedback">Ingrese una contraseña</div>
            </div>

            <div class="d-flex justify-content-end">
              <button type="submit" class="btn btn-success" name="registro">Registrar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</main>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js" integrity="sha384-..." crossorigin="anonymous"></script>
<script>
  (function () {
    'use strict';
    var forms = [document.getElementById('loginForm'), document.getElementById('registerForm')];
    forms.forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  })();
</script>
</body>
</html>