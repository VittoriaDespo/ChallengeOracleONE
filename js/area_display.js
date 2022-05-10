
function mostraMensagemDisplay() {
	var textoDigitado = input.value;
	
	if(textoDigitado == ""){
		var mensagem = buscaElemento("#nenhuma-mensagem");
		mensagem.textContent="Nenhuma mensagem encontrada";
		
	}	
}

function exibirTextoCriptografado() {

	displayTexto.style.display = "block";
    displayInizial.style.display = "none";
    buttonCopia.style.display = "block";
}

