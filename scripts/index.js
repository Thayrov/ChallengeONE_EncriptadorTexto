//  Variables
const encriptado = {e: 'enter', i: 'imes', a: 'ai', o: 'ober', u: 'ufat'};
const desencriptado = {enter: 'e', imes: 'i', ai: 'a', ober: 'o', ufat: 'u'};

const encriptarTexto = start => {
	start.preventDefault();
	var inputUsuario = document.getElementById('inputArea').value;
	var resultadoEncriptado = inputUsuario
		.replace(/[eiaou]/g, i => encriptado[i])
		.replace(/[^a-z]/g, '');

	document.getElementById('resultado').innerHTML = resultadoEncriptado;
};

const desencriptarTexto = start => {
	start.preventDefault();
	var inputUsuario = document.getElementById('inputArea').value;
	var resultadoDesencriptado = inputUsuario
		.replace(/(enter)+|(imes)+|(ai)+|(ober)+|(ufat)+/g, i => desencriptado[i])
		.replace(/[^a-z]/g, '');
	document.getElementById('resultado').innerHTML = resultadoDesencriptado;
};

//  Eventos para activar función cambiarTexto()
document.addEventListener('DOMContentLoaded', () => {
	document
		.getElementById('encriptarTexto')
		.addEventListener('click', encriptarTexto);
});

document.addEventListener('DOMContentLoaded', () => {
	document
		.getElementById('desencriptarTexto')
		.addEventListener('click', desencriptarTexto);
});
//  Función que copia el resultado
const copy = () => {
	var resultado = document.getElementById('resultado').innerText;
	navigator.clipboard.writeText(resultado);
	document.getElementById('resultado').reset();
};

//Evento para ejecutar función copy()
document.getElementById('copiarResultado').addEventListener('click', copy);
