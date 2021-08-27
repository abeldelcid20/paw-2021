$(document).ready(function () {
    /*Guardar Datos Empresa */
    $("#data-empresa").on("submit", function (e) {
        e.preventDefault();

        var formData = new FormData(document.getElementById("data-empresa"));

        formData.append("dato", "valor");

        $.ajax({
            url: "personalizar/save_data.php",
            type: "post",
            dataType: "html",
            data: formData,
            cache: false,
            contentType: false,
            processData: false
        })
            .done(function (res) {
                $("#contenido-personalizar").html(res);
            });
    });
    /**/
});