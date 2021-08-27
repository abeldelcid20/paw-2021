$(document).ready(function () 
{
    /*Lista Productos segun Categoría para la venta*/
    $("a.ventas-panel").click(function (event)
    {
        var idcategoria;
        idcategoria = $(this).attr("id-cate-ventas");
        $("#contenido-ventas").load("ventas/lista_productos.php?id_categoria=" + idcategoria);
        event.preventDefault();
    });
    
    /*Lista pre-venta*/
    /*$("a.ver-preventa").click(function (event)
    {
        $("#contenido-ventas").load("ventas/pre_ventas.php");
        event.preventDefault();
    });*/

    $("a.ver-preventa").click(function (event) {
        $("#contenido-ventas").load("ventas/pre_ventas.php");
        event.preventDefault();
    });
    

    /*Mostrar Modal para vender producto*/
    $(document).on('click', '.add-car', function (event)
    {
        var id = $(this).attr("id-inventario"); 
        //$('#car-add').modal('show');
        $("#contenido-ventas").load("ventas/data_modal.php?id_inventario=" + id);
        event.preventDefault();
    });

    /*Add Producto a Carrito*/
    $("#save-carrito").on("submit", function (e) {
        e.preventDefault();

        var formData = new FormData(document.getElementById("save-carrito"));

        formData.append("dato", "valor");

        $.ajax({
            url: "ventas/add_carrito.php",
            type: "POST",
            dataType: "html",
            data: formData,
            cache: false,
            contentType: false,
            processData: false
        })
            .done(function (res) {
                $("#contenido-ventas").html(res);
            });
    });

    /* Obtener precio total del producto*/
    $("#cantidad,#precio_venta,#descuento").bind("keyup keydown change", function ()
    {
        var total_producto = $("#cantidad").val();
        var precio_unidad = $("#precio_venta").val();
        var descuento = $("#descuento option:selected").val();
        var des = parseFloat(descuento/100) * (parseFloat(total_producto) * parseFloat(precio_unidad))
        var total = (parseFloat(total_producto) * parseFloat(precio_unidad)) - des;
        $("#total").val(Number(total.toFixed(2)));
    });

    /*Envía el número de pagina productos..*/
    $("a.pagina-ventas").click(function (event) {
        var num, reg, idcateP;
        num = $(this).attr("v-num");
        reg = $(this).attr("num-reg");
        idcateP = $(this).attr("id-cateP");

        $("#contenido-ventas").load("ventas/lista_productos.php?num=" + num + "&num_reg=" + reg + "&id_categoria=" + idcateP);
        event.preventDefault();
    });
    
    /*Buscar Productos*/
    $('#like-ventas,#id-cate').on('change', function (event) {
        var valor,idcate;
        valor = $("#like-ventas").val();
        idcate = $("#id-cate").val();

        if (valor.trim() == "") {
            alertify.alert("Busca Productos", "No ingreso el producto a buscar");
            event.preventDefault();
        }
        else {
            $("#contenido-ventas").load("ventas/lista_productos.php?like=1&valor=" + valor + "&id_categoria=" + idcate);
        }
    });

    /*Aumentar el numero de registros tabla Productos*/
    $('#select-reg-ventas,#id-cate').on('change', function (event) 
    {
        var valor,idcate;
        valor = $("#select-reg-ventas option:selected").val();
        idcate = $("#id-cate").val();

        $("#contenido-ventas").load("ventas/lista_productos.php?n_reg=1&num_reg=" + valor + "&id_categoria=" + idcate);
        event.preventDefault();
    });
    /*Detecta el checkbox de cliente sin registro seleccionado */
    $('#sin-registro,#con-registro').on('change', function (event)
    {
        if ($('#sin-registro').is(':checked')) 
        {
            $("#sin-reg").load("ventas/num_cliente.php");
            event.preventDefault();
        }
        else
        {
            $("#sin-reg").load("ventas/nada.php");
            event.preventDefault();
        }

        if ($('#con-registro').is(':checked'))
        {
            $("#con-reg").load("ventas/select_clientes.php");
            event.preventDefault();
        }
        else
        {
            $("#con-reg").load("ventas/nada.php");
            event.preventDefault();
        }
    });
    
    // Caragr total de productos en preventa
    /*$("a.ventas-panel").click(function (event) {
        $("#total-preventa").load("ventas/total_preventa.php");
        event.preventDefault();
    });*/

    // Realizar pago
    $("a.pagar-preventa").click(function (event) 
    {
        var cod_venta;
        cod_venta = $(this).attr("cod-venta");
        $("#contenido-ventas").load("ventas/realizar_pago.php?cod_venta=" + cod_venta);
        event.preventDefault();
    });
});