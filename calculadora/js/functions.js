function injetaTexto(texto){
    var  saida = document.querySelector("#s");
    saida.textContent= texto;
}
function soma(n1, n2){
    injetaTexto("a soma de "+n1+" com "+n2+" é igual a "+(parseFloat(n1)+ parseFloat(n2)))
}
function subtrai(n1, n2){
    injetaTexto("a subitração  de "+n1+" por "+n2+" é igual a "+(parseFloat(n1) - parseFloat(n2)));
    }
function multiplica(n1, n2){
    injetaTexto("a multiplicação   de "+n1+" por "+n2+" é igual a "+(parseFloat(n1) * parseFloat(n2)));
    }
    function divide(n1, n2){
        injetaTexto("a divisão    de "+n1+" por "+n2+" é igual a "+(parseFloat(n1) / parseFloat(n2)));
        }

function pegaValor(n1id, n2id, bid){
	n1 = document.querySelector(n1id);
	n2 = document.querySelector(n2id);
	
	if(bid=="#btn-soma"){
		soma(n1.value, n2.value);
	}
	if(bid=="#btn-subtrai"){
		subtrai(n1.value, n2.value);
	}
	if(bid=="#btn-multiplica"){
		multiplica(n1.value, n2.value);
	}
	if(bid=="#btn-divide"){
		divide(n1.value, n2.value);
	}
}