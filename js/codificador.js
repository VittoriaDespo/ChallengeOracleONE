var input = buscaElemento("#texto");

var buttonCripto = buscaElemento("#button-cripto");

var displayInizial = buscaElemento("#div-display");

var displayTexto = buscaElemento("#texto-criptografado");

var Regex = /^[a-z\s]+$/;


function buscaElemento(seletor) {

	return document.querySelector(seletor)
}


function codificador() {
	var textoDigitado = input.value;

	if (Regex.test(textoDigitado) == true){

		texto1 = textoDigitado.replaceAll("e", "enter");
	    texto2 = texto1.replaceAll("i", "imes");
	    texto3 = texto2.replaceAll("a", "ai");
	    texto4 = texto3.replaceAll("u", "ufat");
	    textoFinal = texto4.replaceAll("o", "ober");

	    displayTexto.textContent = textoFinal;

	    exibirTextoCriptografado();

	}else if (Regex.test(textoDigitado) == false && !textoDigitado == "") {
		mensagemErro();
		
	}
}

buttonCripto.addEventListener("click", function(event) {
	var textoDigitado = input.value;

	if (textoDigitado == ""){
		buscaElemento("#form").checkValidity();
	}else{
		event.preventDefault();
	}

	mostraMensagemDisplay();
	codificador();
	input.focus();
});