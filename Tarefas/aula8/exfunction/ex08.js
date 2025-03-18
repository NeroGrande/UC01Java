/*
8) Crie uma função chamada verificarParidade que receba um número 
e retorne "Par" se o número for par e "Ímpar" se for ímpar.
*/

function verificarParidade(numero) {
  return numero % 2 === 0 ? "Par" : "Ímpar";
}

// Exemplo de uso:
let num = parseInt(prompt("Digite um número:"));
alert("O número é: " + verificarParidade(num));
