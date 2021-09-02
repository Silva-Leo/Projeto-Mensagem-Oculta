var form = document.getElementById('submit');
var textoNormal = document.getElementById('textoNormal');
var incremento = document.getElementById('incremento');
var codificar = document.getElementById('codificar');
var decodificar = document.getElementById('decodificar');
var resultado = document.getElementById('resultado');
var botao = document.getElementById('botao');

var select = document.getElementById('select');
select.addEventListener("change", function (evento) {
    var valor = evento.target.value;
    if(valor == 'Base64'){
        incremento.style = 'display: none';
    } else{
        incremento.style = 'display: block';
    }
});
function clicou(){
    if(select.value == "Base64"){
        base64();
    } else {
        cifraCesar();
    }
};
submit.addEventListener('submit',function(event){
    event.preventDefault();
});


function cifraCesar(){
    console.log("hey");
    if (codificar.checked == true){
        codificarCesar(textoNormal.value, incremento.value);
    }else{
        decodificarCesar();
    }
    
};

function codificarCesar(texto,incremento){
    texto = texto.split("");
    //for + charcodeAt
    //
    console.log(texto);
};

function decodificarCesar(texto,incremento){

};





/* 
criar var para pegar os valores

criar as functions de codificar=  
e decodificar= 
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