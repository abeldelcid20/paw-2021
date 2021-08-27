<?php
  class Rd //redireccionar
  {
      public function Admin()
      {
          if($_SESSION["tipo"] == 1)
          {

          }
          elseif($_SESSION["tipo"] == 2)
          {
            header("location:../operador/");
          }
          else
          {
            header("location:../../index.php");
          }
      }
      public function operador()
      {
          if($_SESSION["tipo"] == 2)
          {

          }
          elseif($_SESSION["tipo"] == 1)
          {
            header("location:../admin/");
          }
          else
          {
            header("location:../../index.php");
          }
      }
  }  
?>