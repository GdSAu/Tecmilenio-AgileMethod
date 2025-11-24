<?php
session_start();
require_once 'config.php';

// detectar conexión a la BD de usuarios (varias posibles variables comunes)
$users_conn = null;
if (isset($conn) && $conn instanceof mysqli) $users_conn = $conn;
elseif (isset($conn_users) && $conn_users instanceof mysqli) $users_conn = $conn_users;
elseif (isset($conn_usuarios) && $conn_usuarios instanceof mysqli) $users_conn = $conn_usuarios;
elseif (isset($conn_pedidos) && $conn_pedidos instanceof mysqli) {
    // fallback si solo tienes una conexión global
    $users_conn = $conn_pedidos;
}

if (!$users_conn) {
    http_response_code(500);
    echo "Error de servidor: conexión a la base de datos no disponible.";
    exit();
}

$step = $_POST['step'] ?? ($_GET['step'] ?? 'email');
$errors = [];

// STEP 1: enviar email -> verificar existencia y guardar user id en sesión
if ($step === 'email' && $_SERVER['REQUEST_METHOD'] === 'POST') {
    $email = trim($_POST['email'] ?? '');
    if ($email === '') $errors[] = 'Introduce tu correo.';
    if (empty($errors)) {
        $sql = "SELECT id, Email, Nombre FROM usuarios WHERE Email = ? LIMIT 1";
        if ($stmt = $users_conn->prepare($sql)) {
            $stmt->bind_param('s', $email);
            $stmt->execute();
            $stmt->store_result();
            if ($stmt->num_rows === 1) {
                $stmt->bind_result($uid, $uemail, $unombre_es);
                $stmt->fetch();
                // guardar candidato para siguiente paso (no persistir contraseña)
                $_SESSION['pw_reset_user'] = [
                    'id' => $uid,
                    'email' => $uemail,
                    'name' => $unombre_es ?? $unombre_es ?? ''
                ];
                // avanzar al paso de verificar nombre
                header('Location: recuperacion.php?step=verify');
                exit();
            } else {
                $errors[] = 'Correo no encontrado.';
            }
            $stmt->close();
        } else {
            $errors[] = 'Error del servidor.';
        }
    }
}

// STEP 2: verificar nombre ingresado
if ($step === 'verify' && $_SERVER['REQUEST_METHOD'] === 'POST') {
    if (empty($_SESSION['pw_reset_user'])) {
        header('Location: recuperacion.php');
        exit();
    }
    $inputName = trim($_POST['name'] ?? '');
    if ($inputName === '') $errors[] = 'Introduce el nombre de usuario.';
    if (empty($errors)) {
        $expected = trim($_SESSION['pw_reset_user']['name'] ?? '');
        // comparar insensible a mayúsculas
        if ($expected !== '' && strcasecmp($inputName, $expected) === 0) {
            // marca verificado y avanzar
            $_SESSION['pw_reset_verified'] = true;
            header('Location: recuperacion.php?step=reset');
            exit();
        } else {
            $errors[] = 'El nombre no coincide con el registrado para ese correo.';
        }
    }
}

// STEP 3: cambiar contraseña
if ($step === 'reset' && $_SERVER['REQUEST_METHOD'] === 'POST') {
    if (empty($_SESSION['pw_reset_user']) || empty($_SESSION['pw_reset_verified'])) {
        header('Location: recuperacion.php');
        exit();
    }
    $pass1 = $_POST['password'] ?? '';
    $pass2 = $_POST['password_confirm'] ?? '';
    if (trim($pass1) === '' || trim($pass2) === '') $errors[] = 'Rellena ambos campos de contraseña.';
    if ($pass1 !== $pass2) $errors[] = 'Las contraseñas no coinciden.';
    if (strlen($pass1) < 6) $errors[] = 'La contraseña debe tener al menos 6 caracteres.';
    if (empty($errors)) {
        $hash = password_hash($pass1, PASSWORD_DEFAULT);
        $uid = intval($_SESSION['pw_reset_user']['id']);
        $sql = "UPDATE usuarios SET Pwd = ? WHERE id = ?";
        if ($stmt = $users_conn->prepare($sql)) {
            $stmt->bind_param('si', $hash, $uid);
            if ($stmt->execute()) {
                // limpieza de sesión y redirección a login
                unset($_SESSION['pw_reset_user'], $_SESSION['pw_reset_verified']);
                $_SESSION['pw_msg'] = 'Contraseña actualizada. Puedes iniciar sesión.';
                header('Location: usuarios.php');
                exit();
            } else {
                $errors[] = 'No se pudo actualizar la contraseña.';
            }
            $stmt->close();
        } else {
            $errors[] = 'Error del servidor.';
        }
    }
}

// HTML: formularios por paso
?>

<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title >Jinambou - Recuperar Contraseña</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB" crossorigin="anonymous"> 
</head>
  <body class="bg-success"  style="--bs-bg-opacity: .60;">
    <nav class="navbar navbar-expand-lg bg-light text-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="index.php"><img src="images/logo.jpg" alt="Jinambou" width="50" height="50"></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="menu.php" >Menu</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="usuarios.php">Perfil</a>
          
        </li>
      </ul>
    </div>
    </div>
  </div>
</nav>
<main class="container mt-4">
    <div class="card shadow-sm mx-auto" style="max-width:720px;">
      <div class="card-body">
        <h3 class="card-title mb-3">Recuperar contraseña</h3>

        <?php if (!empty($errors)): ?>
          <div class="alert alert-danger">
            <?php foreach ($errors as $e) echo '<div>' . htmlspecialchars($e) . '</div>'; ?>
          </div>
        <?php endif; ?>

        <?php if (($step === 'email' && $_SERVER['REQUEST_METHOD'] !== 'POST') || $step === 'email'): ?>
          <form method="post" action="recuperacion.php">
            <input type="hidden" name="step" value="email">
            <div class="mb-3">
              <label class="form-label">Correo electrónico</label>
              <input type="email" name="email" class="form-control" required>
            </div>
            <button class="btn btn-primary">Enviar</button>
          </form>

        <?php elseif ($step === 'verify'): ?>
          <?php if (empty($_SESSION['pw_reset_user'])): ?>
            <div class="alert alert-warning">Primero introduce tu correo.</div>
            <a class="btn btn-secondary" href="recuperacion.php">Volver</a>
          <?php else: ?>
            <p>Se ha encontrado una cuenta para: <strong><?= htmlspecialchars($_SESSION['pw_reset_user']['email']) ?></strong></p>
            <form method="post" action="recuperacion.php?step=verify">
              <input type="hidden" name="step" value="verify">
              <div class="mb-3">
                <label class="form-label">Confirma tu nombre de usuario</label>
                <input type="text" name="name" class="form-control" required>
              </div>
              <button class="btn btn-primary">Verificar</button>
            </form>
          <?php endif; ?>

        <?php elseif ($step === 'reset'): ?>
          <?php if (empty($_SESSION['pw_reset_user']) || empty($_SESSION['pw_reset_verified'])): ?>
            <div class="alert alert-warning">Acceso no autorizado al formulario de cambio.</div>
            <a class="btn btn-secondary" href="recuperacion.php">Volver</a>
          <?php else: ?>
            <p>Restablecer contraseña para: <strong><?= htmlspecialchars($_SESSION['pw_reset_user']['email']) ?></strong></p>
            <form method="post" action="recuperacion.php?step=reset">
              <input type="hidden" name="step" value="reset">
              <div class="mb-3">
                <label class="form-label">Nueva contraseña</label>
                <input type="password" name="password" class="form-control" required>
              </div>
              <div class="mb-3">
                <label class="form-label">Repetir contraseña</label>
                <input type="password" name="password_confirm" class="form-control" required>
              </div>
              <button class="btn btn-success">Cambiar contraseña</button>
            </form>
          <?php endif; ?>

        <?php else: ?>
          <a class="btn btn-secondary" href="recuperacion.php">Iniciar</a>
        <?php endif; ?>

      </div>
    </div>
  </main>
</body>
</html>