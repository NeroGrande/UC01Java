/*
3) Crie uma Função que Calcula o Quadrado de um Número
*/

function quadrado(num) {
    return num * num; // Calcula o quadrado do número
}

// Solicita ao usuário um número
let numero = prompt("Digite um número:");

// Converte a entrada para um número
numero = Number(numero);

// Calcula o quadrado e exibe o resultado
let resultado = quadrado(numero);
alert("O quadrado de " + numero + " é " + resultado);
