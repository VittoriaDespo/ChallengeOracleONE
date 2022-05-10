
var buttonLimpa = buscaElemento("#button-reload");

function limpaPagina(){
	var textoDigitado = input.value;
	if(displayTexto == textoFinal){
		displayInizial.style.display = 'flex';
	} 
	else {
	    displayInizial.style.display = 'none';
	}
}

buttonLimpa.addEventListener("click", function(){
	limpaPagina();
});

