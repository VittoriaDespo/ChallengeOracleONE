
var buttonCopia = buscaElemento("#button-copia")

function copia(){
	displayTexto.select();
	document.execCommand("copy");
	alert("texto copiado com sucesso!");
}

buttonCopia.addEventListener("click",function() {
	copia();
})

