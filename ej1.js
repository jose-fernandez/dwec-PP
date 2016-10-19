/*
 EJERCICIOS – FUNCIONES 
1.
Define   una   función   máximo   que   dados   4   valores   devuelva   
el   máximo   de   ellos.
Llámala con un ejemplo pidiendo los 4 valores al usuario.
*/

function maximo(){
	var list = new Array();
	for (i=0;i<4;i++){
		var x = parseInt(prompt("Type a number."));
		while (isNaN(x)){
			x= parseInt(prompt("That wasn't a number, try again."));
		}
	list.push(x);
	}
	var cont=0;
	for (x=0;x<list.length;x++){
		if (cont<list[x])
			cont=list[x];
	}
	//console.log(cont);
	return cont;
}