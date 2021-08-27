$(document).ready(function () 
{
    /*Carga contenido de Stock*/
    $("a#stock").click(function (event) {
        $("#contenido-procesos").load("procesos_varios/stock/principal_stock.php");
        event.preventDefault();
    });
    /*Envía el número de pagina productos en stock..*/
    $("a.pagina-productos-inventario").click(function (event) {
        var num, reg;
        num = $(this).attr("v-num");
        reg = $(this).attr("num-reg")
        $("#contenido-procesos").load("procesos_varios/stock/principal_stock.php?num=" + num + "&num_reg=" + reg);
        event.preventDefault();
    });
    /*Buscar Productos en stock*/
    $('#like-productos-inventario').on('change', function (event) {
        var valor;
        valor = $("#like-productos-inventario").val();


        if (valor.trim() == "") {
            alertify.alert("Busca Productos", "No ingreso el producto a buscar");
            event.preventDefault();
        }
        else {
            $("#contenido-procesos").load("procesos_varios/stock/principal_stock.php?like=1&valor=" + valor);
        }
    });
    /*Aumentar el numero de registros tabla Productos en stock*/
    $('#select-reg-productos-inventario').on('change', function (event) {
        var valor;
        valor = $("#select-reg-productos-inventario option:selected").val();

        $("#contenido-procesos").load("procesos_varios/stock/principal_stock.php?n_reg=1&num_reg=" + valor);
    });
    /*Carga Form nuevo  producto*/
    $("a.new-producto-inventario").click(function (event) {
        $("#contenido-procesos").load("procesos_varios/stock/form_insert.php");
        event.preventDefault();
    });
    
	/**/
});