var textoNormal = document.getElementById('textoNormal');
var incremento = document.getElementById('incremento')

var select = document.getElementById('select');
select.addEventListener("change", function (evento) {
    var valor = evento.target.value;
    if(valor == 'Base64'){
        incremento.style = 'display: none';
    } else{
        incremento.style = 'display: block';
    }
});




//var radioButton = document.getElementById('codificar')


function cifra(string){
    return 
}

function base64(string){
    return
}
/* 
criar var para pegar os valores

criar as functions de codificar e decodificar
adicionar function cifracesar
adicionar function base64


dps a conexão

selecionar no local com o getElementby/../ - selecionar class espaço1
var input = document.createElement('input')(essa var input ta criando um elemento, ela vale isso, serve a lógica para todas)
; para quando for selecionado cifra de cesar 

append para criar no HTML
criar um elemento Input com o
*/



/* 
A lógica é criar toda lógica do JS primeiro, como as var, funções, depois conectar
utilizando o DOM e fazer suas funcionalidades.
*/