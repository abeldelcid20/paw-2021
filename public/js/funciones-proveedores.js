$(document).ready(function ()
{
    /*Principal Proveedores*/
    $("a.proveedores").click(function (event) {
        $("#contenido-procesos").load("procesos_varios/proveedores/principal_proveedores.php");
        event.preventDefault();
    });
});