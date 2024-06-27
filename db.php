<?php
$servername = "localhost";
$username = "ediciones-el-oso";
$password = "";
$dbname = "fotografia";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}
?>
