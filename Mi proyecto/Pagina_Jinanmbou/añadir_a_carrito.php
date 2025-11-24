<?php
session_start();
if (empty($_SESSION['email'])) { header('Location: usuarios.php'); exit(); }

$title = trim($_POST['title'] ?? '');
$price = $_POST['price'] ?? '';

if ($title === '' || $price === '') {
    header('Location: menu.php');
    exit();
}

$price = floatval(str_replace(',', '.', $price));

if (!isset($_SESSION['cart']) || !is_array($_SESSION['cart'])) {
    $_SESSION['cart'] = [];
}

$key = $title;
if (isset($_SESSION['cart'][$key])) {
    $_SESSION['cart'][$key]['qty'] += 1;
} else {
    $_SESSION['cart'][$key] = [
        'title' => $title,
        'price' => $price,
        'qty' => 1,
    ];
}

header('Location: carrito.php');
exit();
?>