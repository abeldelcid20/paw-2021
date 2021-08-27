<?php 
    function AccesoLogin($user, $passw)
    {
        $consultas = new Login();
        $data = $consultas->getDataUser($user);
        
        if($data)
        {
            foreach ($data AS $result)
            {
                $idusuario = $result['idusuario'];
                $hash = $result['clave'];
                $tipo = $result['tipo'];
                $estado = $result['estado'];
            }
            if($estado == 1)
            {
                    if(password_verify($passw,$hash))
                    {
                        if($tipo == 1) //acceso para vista administrador
                        {
                            $_SESSION["idusuario"] = $idusuario;
                            $_SESSION["user"] = $user;
                            $_SESSION["tipo"] = $tipo;
                            header("location:../views/admin/");
                        }
                        else // acceso otros usuarios
                        {
                            $_SESSION["idusuario"] = $idusuario;
                            $_SESSION["user"] = $user;
                            $_SESSION["tipo"] = $tipo;
                            header("location:../views/operador/");
                        }
                    }
                    else
                    {
                        header("location:../index.php?msj=".base64_encode("Contrasena incorrecta..."));
                    }
            }
            else
            {
                header("location:../index.php?msj=".base64_encode("El usuario no tiene permisos de acceso..."));
            }
        }
        else
            {
                header("location:../index.php?msj=".base64_encode("El usuario no existe..."));
            }
    }
?>