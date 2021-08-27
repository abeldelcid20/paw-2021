$(document).ready(function () 
{
    /*Formulario Nuevo Usuario*/
    $("a.new_user").click(function (event) {
        $("#contenido-usuario").load("usuarios/form_new_user.php");
        event.preventDefault();
    });

    /*Formulario Editar Clave Usuario*/
    $("a.edit-user").click(function (event) {
        var iduser = $(this).attr("id-user");
        $("#contenido-usuario").load("usuarios/form_update_user.php?accion=1&id_user=" + iduser);
        event.preventDefault();
    });

    /*Actualizar Usuario*/
    $("#upd-user").click(function (event) {
        var iduser, clave;
        iduser = $("#id-user").val();
        clave = $("#n-passw").val();
        if (clave.length > 0 && clave.length < 8) {
            alert("La contraseña debe contener entre 8 o más caracteres...");
            event.preventDefault();
        }
        else if (clave == "") {
            alert("El campo contraseña esta vacio...");
            event.preventDefault();
        }
        else {
            $("#contenido-usuario").load("usuarios/update_user.php?id_user=" + iduser + "&nclave=" + clave);
            event.preventDefault();
        }
    });

    /*Actualizar Tipo y Email Usuario*/
    $("#upd2-user").click(function (event) {
        var iduser, email, tipo;
        iduser = $("#id-user").val();
        email = $("#email").val();
        tipo = $("#tipo-user option:selected").val();

        if (email == "") {
            alert("El campo email esta vacio...");
            event.preventDefault();
        }
        else if (tipo == 0 || tipo == "") {
            alert("El tipo de usuario no fue seleccionado...");
            event.preventDefault();
        }
        else {
            $("#contenido-usuario").load("usuarios/update_user.php?id_user=" + iduser + "&tipo=" + tipo + "&email=" + email);
            event.preventDefault();
        }
    });

    /*Eliminar Usuario*/
    $("a.del-user").click(function (event) {
        if (confirm('Eliminar Usuario', "Seguro/a de eliminar Usuario?")) {
            var iduser = $(this).attr("id-user");
            $("#contenido-usuario").load("usuarios/form_update_user.php?accion=2&id_user=" + iduser);
            event.preventDefault();
        } else {
            alertify.alert('Eliminar Usuario', 'Proceso cancelado..');
            //alert("Proceso cancelado..");
            event.preventDefault();
        }
    });

    /*Insertar Usuario*/
    $("#save-user").click(function (event) {
        var user, clave, email, tipo;
        user = $("#user").val();
        clave = $("#passw").val();
        email = $("#email").val();
        tipo = $("#tipo-user option:selected").val();

        if (user == "") {
            alert("El campo usuario esta vacio...");
            event.preventDefault();
        }
        else if (clave.length > 0 && clave.length < 8) {
            alert("La contraseña debe contener entre 8 o más caracteres...");
            event.preventDefault();
        }
        else if (clave == "") {
            alert("El campo contraseña esta vacio...");
            event.preventDefault();
        }
        else if (email == "") {
            alert("El campo email esta vacio...");
            event.preventDefault();
        }
        else if (tipo == 0 || tipo == "") {
            alert("El tipo de usuario no fue seleccionado...");
            event.preventDefault();
        }
        else {
            $("#contenido-usuario").load("usuarios/save_user.php?user=" + user + "&clave=" + clave + "&email=" + email + "&tipo=" + tipo);
            event.preventDefault();
        }
    });

    /*Editar Estado Acceso  Usuario*/
    $("a.edit-estado").click(function (event) {
        var iduser, estado;
        iduser = $(this).attr("id-user");
        estado = $(this).attr("estado");
        $("#contenido-usuario").load("usuarios/form_update_user.php?accion=3&id_user=" + iduser + "&estado=" + estado);
        event.preventDefault();
    });

    /*Editar tipo y correo Usuario*/
    $("a.edit-tipo").click(function (event) {
        var iduser, estado;
        iduser = $(this).attr("id-user");
        tipo = $(this).attr("tipo");
        $("#contenido-usuario").load("usuarios/form_update_user.php?accion=4&id_user=" + iduser + "&tipo=" + tipo);
        event.preventDefault();
    });	
});