<?php

$host = "localhost";
$user = "root";
$password = "";
$dbname = "usuarios_db";

$conn = new mysqli($host, $user, $password, $dbname);
if ($conn->connect_error) {
    die("Connection failed". $conn->connect_error);
}
$pedidos_dbname = "pedidos_db";
$conn_pedidos = new mysqli($host, $user, $password, $pedidos_dbname);
if ($conn_pedidos->connect_error) {
    die("Pedidos DB connection failed: " . $conn_pedidos->connect_error);
}
?>