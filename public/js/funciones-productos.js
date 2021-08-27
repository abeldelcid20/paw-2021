$(document).ready(function () 
{
    /* Principal Productos*/
    $("a.productos").click(function (event) {
        $("#contenido-procesos").load("procesos_varios/productos/principal_productos.php");
        event.preventDefault();
    });
    /*Carga Form nuevo  producto*/
    $("a.new-producto").click(function (event) {
        $("#contenido-procesos").load("procesos_varios/productos/form_insert.php");
        event.preventDefault();
    });
    
    /*Guardar Nuevo Producto */
    $("#new-product").on("submit", function (e) {
        e.preventDefault();

        var formData = new FormData(document.getElementById("new-product"));

        formData.append("dato", "valor");

        $.ajax({
            url: "procesos_varios/productos/save_producto.php",
            type: "post",
            dataType: "html",
            data: formData,
            cache: false,
            contentType: false,
            processData: false
        })
            .done(function (res) {
                $("#contenido-procesos").html(res);
            });
    });

    /*Envía el número de pagina productos..*/
    $("a.pagina-productos").click(function (event) {
        var num, reg;
        num = $(this).attr("v-num");
        reg = $(this).attr("num-reg");
        $("#contenido-procesos").load("procesos_varios/productos/principal_productos.php?num=" + num + "&num_reg=" + reg);
        event.preventDefault();
    });
    /*Buscar Productos*/
    $('#like-productos').on('change', function (event) {
        var valor;
        valor = $("#like-productos").val();


        if (valor.trim() == "") {
            alertify.alert("Busca Productos", "No ingreso el producto a buscar");
            event.preventDefault();
        }
        else {
            $("#contenido-procesos").load("procesos_varios/productos/principal_productos.php?like=1&valor=" + valor);
            event.preventDefault();
        }
    });
    /*Aumentar el numero de registros tabla Productos*/
    $('#select-reg-productos').on('change', function (event) {
        var valor;
        valor = $("#select-reg-productos option:selected").val();

        $("#contenido-procesos").load("procesos_varios/productos/principal_productos.php?n_reg=1&num_reg=" + valor);
        event.preventDefault();
    });
	/**/
});