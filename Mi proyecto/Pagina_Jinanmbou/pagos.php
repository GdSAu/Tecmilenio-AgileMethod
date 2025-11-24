<?php
session_start();

require_once 'config.php'; 

if (empty($_SESSION['email'])) {
    header('Location: usuarios.php');
    exit();
}

$cart = $_SESSION['cart'] ?? [];
if (empty($cart)) {
    header('Location: carrito.php');
    exit();
}

$orders = &$_SESSION['orders'];
if (!isset($orders) || !is_array($orders)) $orders = [];

$nextNumber = count($orders) + 1;
$total = 0.0;
foreach ($cart as $it) {
    $total += ($it['price'] * ($it['qty'] ?? 1));
}

$order = [
    'number' => $nextNumber,
    'email' => $_SESSION['email'],
    'name'  => $_SESSION['name'] ?? '',
    'items' => $cart,
    'total' => $total,
    'created_at' => date('Y-m-d H:i:s'),
];

$orders[] = $order;

if (isset($conn_pedidos) && $conn_pedidos instanceof mysqli) {
    // asegurar tabla básica
    $create_sql = "CREATE TABLE IF NOT EXISTS pedidos (
        id INT AUTO_INCREMENT PRIMARY KEY,
        Pedido LONGTEXT NOT NULL,
        Estado ENUM('En Preparacion','Listo','Entregado') NOT NULL,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    ) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci";
    $conn_pedidos->query($create_sql);

    // obtener primera opción de ENUM (fallback)
    $estado = 'En Preparacion';
    $res = $conn_pedidos->query("SHOW COLUMNS FROM pedidos LIKE 'Estado'");
    if ($res && $row = $res->fetch_assoc()) {
        $type = $row['Type'] ?? '';
        if (preg_match("/^enum\\((.*)\\)$/", $type, $m)) {
            $inside = $m[1]; // "'En Preparacion','Listo','Entregado'"
            $values = str_getcsv($inside, ',', "'"); // devuelve array sin comillas
            if (!empty($values) && is_array($values)) {
                $estado = $values[0];
            }
        }
        $res->free();



if (empty($_SESSION['email'])) {
    header('Location: usuarios.php');
    exit();
}
    }

    $pedido_json = json_encode($order, JSON_UNESCAPED_UNICODE);

    // insertar y verificar resultado
    if ($stmt = $conn_pedidos->prepare("INSERT INTO pedidos (Pedido, Estado) VALUES (?, ?)")) {
        $stmt->bind_param('ss', $pedido_json, $estado);
        $execOk = $stmt->execute();
        if ($execOk) {
            $_SESSION['last_order_id'] = $conn_pedidos->insert_id;
            $stmt->close();
            // limpieza de carrito tras confirmación en BD
            unset($_SESSION['cart']);
            // redirigir a referencia.php solo si la orden se guardó correctamente
            header('Location: referencia.php');
            exit();
        } else {
            error_log("Insert pedido failed: " . $stmt->error);
            $stmt->close();
            $_SESSION['order_error'] = 'No se pudo procesar el pedido. Inténtalo de nuevo.';
            header('Location: carrito.php');
            exit();
        }
    } else {
        error_log("Prepare insert pedido failed: " . $conn_pedidos->error);
        $_SESSION['order_error'] = 'Error del servidor. Inténtalo más tarde.';
        header('Location: carrito.php');
        exit();
    }
} else {
    error_log("Conexion a pedidos_db no disponible.");
    $_SESSION['order_error'] = 'Error de conexión con el servicio de pedidos.';
    header('Location: carrito.php');
    exit();
}
?>