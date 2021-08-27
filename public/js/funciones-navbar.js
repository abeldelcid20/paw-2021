$(document).ready(function () {
    // Funciones navbar
    $("a.inventario").click(function (event) {
        $("#capa").load("inventario/principal.php");
        event.preventDefault();
    });

    $("a.procesos-v").click(function (event) {
        $("#capa").load("procesos_varios/principal.php");
        event.preventDefault();
    });

    $("a.personalizar").click(function (event) {
        $("#capa").load("personalizar/principal.php");
        event.preventDefault();
    });

    $("a.usuario").click(function (event) {
        $("#capa").load("usuarios/principal.php");
        event.preventDefault();
    });

    $("a.ventas").click(function (event) {
        $("#capa").load("ventas/principal.php");
        event.preventDefault();
    });
    //
});