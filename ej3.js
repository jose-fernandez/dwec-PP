/*
Crea una web desde la que se simule el lanzamiento de un dado de 6 caras.
Para ello define una función “lanzamiento” que devuelva un nº aleatorio 
entre 1 y 6. 

Para demostrar que todos deben tener similar probabilidad, mejora la web anterior de
modo que se pueda generar una simulación de 6000 tiradas, mostrando al final el nº
de ocurrencias de cada uno de los valores.

*/

function lanzamiento(){
	var list= new Array();
	for (j=0;j<6;j++){
	list[j]=0;
	}
	for (i=0;i<6001;i++){
		var x= Math.floor(Math.random() * (7-1) + 1);
		++list[x-1];
	}
	var resultado = document.getElementById("parrafo");
	resultado.innerHTML=`1 ha salido: ${list[0]} veces.<br>
	2 ha salido: ${list[1]} veces.<br>3 ha salido: ${list[2]} veces.<br>
	4 ha salido: ${list[3]} veces.<br>5 ha salido: ${list[4]} veces.<br>
	6 ha salido: ${list[5]} veces.<br>`;
}