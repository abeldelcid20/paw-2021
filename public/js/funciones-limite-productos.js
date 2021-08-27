$(document).ready(function () {
    /*Principal Limite Productos*/
    $("a.limite").click(function (event) {
        $("#contenido-procesos").load("procesos_varios/limite/principal_limite.php");
        event.preventDefault();
    });
    /*Actualizar Límite Producto*/
    $("a.edit-limite").click(function (event) {
        var idlimite;
        idlimite = $(this).attr("id-limite");
        $("#contenido-procesos").load("procesos_varios/limite/form_limite.php?update=1&idlimite=" + idlimite);
        event.preventDefault();
    });
    /*Form Nuevo Limite de producto*/
    $("a.new-limite").click(function (event) {
        $("#contenido-procesos").load("procesos_varios/limite/form_limite.php?insert=1");
        event.preventDefault();
    });
    // Insertar Límite Producto a BD
    $("#save-limite").click(function (event) {
        var idproducto, limite;
        id_producto = $("#idproducto option:selected").val();
        limite = $("#limite").val();
        if (id_producto == "") {
            alertify.alert("Registro Límite Producto", "El campo producto esta vacio...");
            event.preventDefault();
        }
        else if (limite == "") {
            alertify.alert("Registro Límite Producto", "El campo límite producto esta vacio...");
            event.preventDefault();
        }
        else {
            $("#contenido-procesos").load("procesos_varios/limite/IUD_limite.php?insert_limite=1&id_producto=" + id_producto + "&limite=" + limite);
            event.preventDefault();
        }
    });
    /*Envía el número de pagina productos..*/
    $("a.pagina-limite").click(function (event) {
        var num, reg;
        num = $(this).attr("v-num");
        reg = $(this).attr("num-reg")
        $("#contenido-procesos").load("procesos_varios/limite/principal_limite.php?num=" + num + "&num_reg=" + reg);
        event.preventDefault();
    });
    /*Buscar limite*/
    $('#like-limite').on('change', function (event) {
        var valor;
        valor = $("#like-limite").val();


        if (valor.trim() == "") {
            alertify.alert("Busca limite", "No ingreso el producto a buscar");
            event.preventDefault();
        }
        else {
            $("#contenido-procesos").load("procesos_varios/limite/principal_limite.php?like=1&valor=" + valor);
        }
    });
    /*Aumentar el numero de registros tabla limite*/
    $('#select-reg-limite').on('change', function (event) {
        var valor;
        valor = $("#select-reg-limite option:selected").val();

        $("#contenido-procesos").load("procesos_varios/limite/principal_limite.php?n_reg=1&num_reg=" + valor);
    });
    /**/
});