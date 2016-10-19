/*
Crea   una   función   que   calcule   el   factorial   
de   un   número   dado.   Para   comprobarlo, diseña una 
web que muestre en forma de tabla el factorial para los valores 
de 1 a 10.
*/

function calculaFactorial(n){
	if (n==1){
		return 1;
	}else{
	return n * calculaFactorial(n-1);
	}
}

function init(){
	document.write(`<table cellspacing="2" cellpadding="2" border="1">`);
	for (i=1;i<11;i++){
		document.write(`<tr><td> ${i}</td>
		 <td>${calculaFactorial(i)}</td></tr>`);
	}
	document.write("</table>");	
	
}