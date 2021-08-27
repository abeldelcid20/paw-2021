<?php
    session_start();
    $_SESSION = array();
    session_destroy();
?>
<!DOCTYPE html>
<html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Login</title>
        <!-- CSS -->
        <link rel="stylesheet" href="./public/css/bootstrap.min.css">
	    <link rel="stylesheet" href="./public/css/bootstrap-theme.css">
        <link rel="stylesheet" href="./public/css/estilo.css">
        <!-- JS -->
        <script src="./public/js/jquery-3.5.1.slim.min.js"></script>
        <script src="./public/js/jquery-1.9.1.min.js"></script>
        <script src="./public/js/bootstrap.min.js"></script>
        <script src="https://kit.fontawesome.com/05f4903dc9.js" crossorigin="anonymous"></script>
    </head>
    <body>
        <?php
            echo PHP_OS;
        ?>
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-6">
                    <div class="d-none d-sm-none d-md-block">
                        <div class="contenlogin">
                            <div class="login">
                                <h3><b>Bienvenidos/as</b></h3>
                                <div style="text-align: center;">
                                    <form action="#" method="POST">
                                        <div class="input-group mb-3">
                                            <div class="input-group-prepend">
                                                <span class="input-group-text" id="basic-addon1">
                                                    <i class="fas fa-key"></i>
                                                </span>
                                            </div>
                                            <input type="text" name="clave" class="form-control" placeholder="Contraseña a encriptar" required="ON">
                                        </div>
                                        <div>
                                            <button class="btn btn-success" name="encript">Encriptar</button>
                                        </div>
                                    </form>
                                    <?php if(isset($_POST['encript'])):?>
                                        <div class="alert alert-info">
                                            <?php 
                                                echo password_hash($_POST['clave'],PASSWORD_DEFAULT);
                                            ?>
                                        </div>
                                    <?php endif ?>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="contenlogin">
                        <div class="login">
                            <?php if(isset($_GET['msj'])):?>
                                <div class="alert alert-danger" style="margin-bottom: 10px;">
                                <?php 
                                    echo base64_decode($_GET['msj']);
                                ?>
                                </div>
                            <?php endif?>
                           <form action="./controllers/login.php" method="POST" class="border p-3 formlogin">
                                <div style="margin-bottom: 10px;color:white;text-align:center;font-weight:bold;">
                                    <b>Iniciar Sesión</b>
                                </div>
                                <div class="input-group mb-3">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text" id="basic-addon1">
                                            <i class="fas fa-user"></i>
                                        </span>
                                    </div>
                                    <input type="text" name="user" class="form-control" placeholder="Usuario" required="ON">
                                </div>
                                <div class="input-group mb-3">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text" id="basic-addon1">
                                            <i class="fas fa-key"></i>
                                        </span>
                                    </div>
                                    <input type="password" name="passw" class="form-control" placeholder="Contraseña" required="ON">
                                </div>
                                <div style="text-align: center;">
                                    <button class="btn btn-primary btn-sm" name="acclogin">Ingresar</button>
                                </div>
                           </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </body>
</html>