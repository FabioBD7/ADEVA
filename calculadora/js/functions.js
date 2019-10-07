function injetaTexto(texto){
    var  saida = document.querySelector("#s");
    saida.textContent= texto;
}
function soma(n1id, n2id){
    var n1 = document.querySelector(n1id);
    var n2 = document.querySelector(n2id);
    
    injetaTexto("a soma de "+n1.value+" com "+n2.value+" é igual a "+(parseFloat(n1.value)+ parseFloat(n2.value)))
}

function subtrai(n1id, n2id){
    var n1 = document.querySelector(n1id);
    var n2 = document.querySelector(n2id);
    
    injetaTexto("a subitração  de "+n1.value+" por "+n2.value+" é igual a "+(parseFloat(n1.value) - parseFloat(n2.value)))
}