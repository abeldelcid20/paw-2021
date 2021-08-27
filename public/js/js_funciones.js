// Funcion qeu oculta div de Procesos Varios
function myFunction() 
{
	var x = document.getElementById("myDIV");
	if (x.style.display === "none") 
	{
		x.style.display = "block";
	} else {
		x.style.display = "none";
	}
}

// Funcion para pre-visualizar imagen antes de guardar Productos
function readURL(input) {
	if (input.files && input.files[0]) 
	{
		var reader = new FileReader();

		reader.onload = function (e) 
		{
			// Asignamos el atributo src a la tag de imagen
			$('#imagenmuestra').attr('src', e.target.result);
		}
		reader.readAsDataURL(input.files[0]);
	}
}

// El listener va asignado al input
$("#imagen").change(function () {
	readURL(this);
});

$("#imagen-cate").change(function () {
	readURL(this);
});

$(document).ready(function () {
	$("#tel").inputmask("9999-9999");
	$("#nit").inputmask("9999-999999-999-9");
});