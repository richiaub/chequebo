var cajaTexto, boton, resultado1, resultado2

var textoUno = "<h3>" + "El chabon de la imagen dice: Asi te lo va a dejar" + "</h3>"
var textoDos ="tevaacogerungrone"
function inicio ()

{


cajaTexto = document.getElementById("cajatexto");
boton = document.getElementById ("boton");
resultado2 = document.getElementById ("textoCambiado");
resultado1 = document.getElementById ("primerTexto");

boton.addEventListener  ("click", juego);

}

function juego ()
{
var numero = Number(cajaTexto.value)
	if (numero > 0){
		resultado1.innerHTML = textoUno
	
	resultado2.innerHTML = textoDos
	}
	else 
	{
		alert ("elegi un numero che culia")
	}
	
	

}