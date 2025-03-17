/*
Crie uma função para receber a idade e informar se a pessoa é maior ou menor de idade
*/

function verficarIdade(idade) {
    let situacao = '';
    if (idade > 18) {
        alert("Maior de Idade");
    } else {
        alert("Menor de Idade");
    }
     return situacao;
}

let idade = parseInt(prompt("informe a idade"));
let resposta = verificarIdade(idade);
alert(resposta);