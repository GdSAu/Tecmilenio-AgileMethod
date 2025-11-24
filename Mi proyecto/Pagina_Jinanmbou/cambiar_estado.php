<?php
session_start();
require_once 'config.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    // redirect back to referer if available and same host, otherwise to pedidos.php
    $referer = $_SERVER['HTTP_REFERER'] ?? '';
    $redirect = 'pedidos.php';
    if ($referer) {
        $refHost = parse_url($referer, PHP_URL_HOST);
        if ($refHost === null || $refHost === $_SERVER['HTTP_HOST']) {
            $redirect = $referer;
        }
    }
    header('Location: ' . $redirect);
    exit();
}

$id = isset($_POST['id']) ? intval($_POST['id']) : 0;
$estado = isset($_POST['estado']) ? trim($_POST['estado']) : '';

// validar valores permitidos
$allowed = ['En Preparacion', 'Listo', 'Entregado'];
if ($id <= 0 || $estado === '' || !in_array($estado, $allowed, true)) {
    $referer = $_SERVER['HTTP_REFERER'] ?? '';
    $redirect = 'pedidos.php';
    if ($referer) {
        $refHost = parse_url($referer, PHP_URL_HOST);
        if ($refHost === null || $refHost === $_SERVER['HTTP_HOST']) {
            $redirect = $referer;
        }
    }
    header('Location: ' . $redirect);
    exit();
}

if (!isset($conn_pedidos) || !($conn_pedidos instanceof mysqli)) {
    error_log("Conexion a pedidos_db no disponible.");
    $referer = $_SERVER['HTTP_REFERER'] ?? '';
    $redirect = 'pedidos.php';
    if ($referer) {
        $refHost = parse_url($referer, PHP_URL_HOST);
        if ($refHost === null || $refHost === $_SERVER['HTTP_HOST']) {
            $redirect = $referer;
        }
    }
    header('Location: ' . $redirect);
    exit();
}

// Actualizar Estado en la BD (no eliminar)
$ok = false;
if ($stmt = $conn_pedidos->prepare("UPDATE pedidos SET Estado = ? WHERE id = ?")) {
    $stmt->bind_param('si', $estado, $id);
    $ok = $stmt->execute();
    if (!$ok) {
        error_log("Update Estado failed: " . $stmt->error);
    }
    $stmt->close();
} else {
    error_log("Prepare update failed: " . $conn_pedidos->error);
}

// redirect back to the page the request came from (if safe), otherwise pedidos.php
$referer = $_SERVER['HTTP_REFERER'] ?? '';
$redirect = 'pedidos.php';
if ($referer) {
    $refHost = parse_url($referer, PHP_URL_HOST);
    if ($refHost === null || $refHost === $_SERVER['HTTP_HOST']) {
        $redirect = $referer;
    }
}
header('Location: ' . $redirect);
exit();
?>