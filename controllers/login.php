<?php 
    session_start();
    include '../models/conexion.php';
    include '../models/login.php';
    include 'procesos.php';

    if(isset($_POST['acclogin']))
    {
        
        $user = $_POST['user'];
        $passw = $_POST['passw'];
     
        //AccesoLogin($user, $passw); Crear Funcion en procesos.php
        AccesoLogin($user, $passw);
    }
    else
    {
        header("Location: ../index.php");
    }
?>