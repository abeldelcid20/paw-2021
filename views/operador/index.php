<?php 
    session_start();
    include '../../controllers/redireccionar.php';
    $user = $_SESSION["user"];

    $redic = new Rd();
    $redic->operador();

?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Operador</title>
</head>
<body>
    <h3><b>Bienvenido/a: <?php echo $user; ?> </b></h3>
</body>
</html>