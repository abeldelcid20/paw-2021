<?php 
    class login
    {
        public function GetDataUSer($user)
        {
            $row = NULL;
            $modelo = new ConexionBD();
            $conexion = $modelo->get_conexion();
            $sql = "SELECT * FROM usuarios WHERE usuario = :usuario";
            $stm = $conexion->prepare($sql);
            $stm->bindParam(':usuario',$user);
            $stm->execute();

            while ($result = $stm->fetch())
            {
                $row[] = $result;
            }
            return $row;
        }
    }
?> 