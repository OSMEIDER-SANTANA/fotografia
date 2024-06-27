
<?php
include 'db.php';

$tipo = $_GET['tipo'];

$sql = "SELECT * FROM productos WHERE tipo='$tipo'";
$result = $conn->query($sql);
?>


<div class="content">
    <h1>Productos para <?php echo ucfirst($tipo); ?></h1>
    <?php
    if ($result->num_rows > 0) {
        while($row = $result->fetch_assoc()) {
            echo "<div>";
            echo "<h2>" . $row["nombre"] . "</h2>";
            echo "<p>" . $row["descripcion"] . "</p>";
            echo "<p>Precio: $" . $row["precio"] . "</p>";
            echo "</div>";
        }
    } else {
        echo "No hay productos disponibles.";
    }
    $conn->close();
    ?>
</div>

