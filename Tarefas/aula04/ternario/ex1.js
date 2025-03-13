/*
7. Peça ao usuário para digitar um número. Verifique se o número é par ou ímpar. Caso seja par, 
exiba a mensagem "Número Par". Caso contrário, exiba "Número Ímpar".
*/

let num = parseInt(prompt("Digite um Número:"))
let resultado = num % 2 == 0 ? "Número Par" : "Número Ímpar";
alert(resultado);