//  Variables
const encriptado = {e: 'enter', i: 'imes', a: 'ai', o: 'ober', u: 'ufat'};
const desencriptado = {enter: 'e', imes: 'i', ai: 'a', ober: 'o', ufat: 'u'};

//  Función que toma entrada de datos del usuario y los encripta
const encriptarTexto = start => {
	start.preventDefault();
	let texto1 = document.getElementById('encriptar').value;
	let textoEncriptado = texto1.replace(/[eiaou]/g, i => encriptado[i]);
	document.getElementById('textoEncriptado').innerHTML = textoEncriptado;
};
//  Evento para activar función encriptarTexto()
document.addEventListener('DOMContentLoaded', () => {
	document
		.getElementById('encriptarTexto')
		.addEventListener('click', encriptarTexto);
});

//  Función que toma entrada de datos del usuario y los desencripta
const desencriptarTexto = start => {
	start.preventDefault();
	let texto2 = document.getElementById('desencriptar').value;
	let textoDesencriptado = texto2.replace(
		/(enter)+|(imes)+|(ai)+|(ober)+|(ufat)+/g,
		i => desencriptado[i],
	);
	document.getElementById('textoDesencriptado').innerHTML = textoDesencriptado;
};
//  Evento para activar función desencriptarTexto()
document.addEventListener('DOMContentLoaded', () => {
	document
		.getElementById('desencriptarTexto')
		.addEventListener('click', desencriptarTexto);
});
//  Función que copia texto encriptado
const copy = () => {
	var input = document.getElementById('textoEncriptado').innerText;
	navigator.clipboard.writeText(input);
};

//Evento para ejecutar función copy()
document
	.getElementById('copiarTextoEncriptado')
	.addEventListener('click', copy);
