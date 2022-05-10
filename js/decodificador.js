
var buttonDecripto = buscaElemento("#button-decripto");

function decodificador() {
	var textoDigitado = input.value;
	var mensagemErro = document.querySelector("#mensagem-erro");
	mensagemErro.innerHTML = ""

	if (Regex.test(textoDigitado) == true){
		texto1 = textoDigitado.replaceAll("enter","e");
    	texto2 = texto1.replaceAll("imes","i");
    	texto3 = texto2.replaceAll("ai","a");
    	texto4 = texto3.replaceAll("ufat","u");
    	textoFinal = texto4.replaceAll("ober","o");

    	displayTexto.textContent = textoFinal;
    	
    	exibirTextoCriptografado();
		
	}
	else if(Regex.test(textoDigitado) == false && !textoDigitado == "") {
		mensagemErro();
	}
}


buttonDecripto.addEventListener("click", function(event) {
	var textoDigitado = input.value;
	
	if (textoDigitado == ""){
		document.getElementById("form").checkValidity();
	}
	else{
		event.preventDefault();
	}

	mostraMensagemDisplay();
	decodificador();
	input.focus();
});





	
	




	
	


