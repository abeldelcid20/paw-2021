$(document).ready(function () 
{
    /*Carga Contenido Categorias */
    $("a.categorias").click(function (event) {
        $("#contenido-procesos").load("procesos_varios/categorias/principal_categorias.php");
        event.preventDefault();
    });
    /*Envía el número de pagina categorias..*/
    $("a.pagina").click(function (event) {
        var num, reg;
        num = $(this).attr("v-num");
        reg = $(this).attr("num-reg")
        $("#contenido-procesos").load("procesos_varios/categorias/principal_categorias.php?num=" + num + "&num_reg=" + reg);
        event.preventDefault();
    });

    /*Buscar Categoria*/
    $('#like-categoria').on('change', function (event) {
        var valor;
        valor = $("#like-categoria").val();
        if (valor.trim() == "") {
            alertify.alert("Busca Categoría", "No ingreso la categoría a buscar");
            event.preventDefault();
        }
        else {
            $("#contenido-procesos").load("procesos_varios/categorias/principal_categorias.php?like=1&valor=" + valor);
        }
    });

    /*Aumentar el numero de registros tabla Categorías*/
    $('#select-reg').on('change', function (event) {
        var valor;
        valor = $("#select-reg option:selected").val();

        $("#contenido-procesos").load("procesos_varios/categorias/principal_categorias.php?n_reg=1&num_reg=" + valor);
    });

    /*Carga Formulario Nueva Categorias */
    $("#new-cate").click(function (event) {
        $("#contenido-procesos").load("procesos_varios/categorias/form_insert.php");
        event.preventDefault();
    });

    /*Carga Formulario Editar Categorias */
    $("a.edit-categoria").click(function (event) {
        var idcategoria;
        idcategoria = $(this).attr("id-categoria");

        $("#contenido-procesos").load("procesos_varios/categorias/form_categoria.php?update=1&idcategoria=" + idcategoria);
        event.preventDefault();
    });

    /*Elimina Categoria */
    $("a.del-categoria").click(function (event) {
        var idcategoria;
        idcategoria = $(this).attr("id-categoria");
        if (confirm("Seguro/a de eliminar categoría...?")) {
            $("#contenido-procesos").load("procesos_varios/categorias/delete_cate.php?idcategoria=" + idcategoria);
            event.preventDefault();
        }
        else {
            //alertify.alert('Eliminar Categoría', 'Proceso cancelado..');
            alertify.error("Proceso cancelado..");
            event.preventDefault();
        }

    });
    // Insertar Categoría a BD
    $("#save-categoria").click(function (event) {
        var categoria;
        categoria = $("#categoria").val();

        if (categoria == "") {
            alertify.alert("Registro Categoría", "El campo categoría esta vacio...");
            event.preventDefault();
        }
        else {
            $("#contenido-procesos").load("procesos_varios/categorias/IUD_categoria.php?insert_cate=1&categoria=" + categoria);
            event.preventDefault();
        }
    });
    /*Actualiza Categoría */
    $("#update-cate").on("submit", function (e) {
        e.preventDefault();

        var formData = new FormData(document.getElementById("update-cate"));

        formData.append("dato", "valor");

        $.ajax({
            url: "procesos_varios/categorias/update_categoria.php",
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
    /**/
});