<?php

session_start();

require_once 'config.php';
error_log('POST: '.print_r($_POST, true));
error_log('BEFORE SESSION: '.print_r($_SESSION, true));
$email = $_POST['Correo'] ?? $_POST['email'] ?? null;
$password = $_POST['Contraseña'] ?? $_POST['password'] ?? null;

if(isset($_POST['registro'])) {
    $name = $_POST['Nombre'];
    $email = $_POST['Correo'];
    $password = password_hash($_POST['Contraseña'], PASSWORD_DEFAULT);   
    $role = "Estudiante";

    $checkEmail = $conn->prepare("SELECT email FROM usuarios WHERE email = '$email'");
    if ($checkEmail->num_rows > 0) {
        $_SESSION['register_error'] = "El correo ya está registrado.";
        $_SESSION['active_form'] = 'register';
    } else {
        $conn->query("INSERT INTO usuarios (Nombre, Email, Pwd, Rol) VALUES ('$name', '$email', '$password', '$role')");
    }
    header("Location: usuarios.php");
    exit();
}

if (isset($_POST['login'])) {
    if ($email && $password) {
        if ($stmt = $conn->prepare("SELECT Pwd, Nombre, Rol FROM usuarios WHERE Email = ?")) {
            $stmt->bind_param('s', $email);
            $stmt->execute();
            $stmt->store_result();
            if ($stmt->num_rows === 1) {
                $stmt->bind_result($hash, $nameFromDb, $roleFromDb);
                $stmt->fetch();
                if (password_verify($password, $hash)) {
                    $_SESSION['email'] = $email;
                    $_SESSION['name'] = $nameFromDb ?: explode('@', $email)[0];
                    error_log('Login success, SESSION: '.print_r($_SESSION, true));
                    $stmt->close();
                    // route by role
                    if (strcasecmp($roleFromDb, 'Empleado') === 0) {
                        header('Location: perfil_empleado.php');
                        exit();
                    } else {
                        header('Location: carrito.php');
                        exit();
                    }
                }
            }
            $stmt->close();
        } else {
            error_log("DB prepare failed: " . $conn->error);
        }
    }
    $_SESSION['login_error'] = 'Correo o contraseña inválidos';
    $_SESSION['active_form'] = 'login';
    header('Location: usuarios.php');
    exit();
}
?>