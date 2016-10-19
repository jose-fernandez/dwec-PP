/*
Crea una función para calcular potencias de un modo recursivo.
*/
var n = parseInt(prompt("Introduce un número"));
var e = parseInt(prompt("Introduce la potencia"));
function lanzamiento(num,exp){
	if (exp==1){
		return num;
	}
	else{
		exp--;
		return num*lanzamiento(num, exp);
	}

}
window.onload= function(){
	lanzamiento(n,e);
}