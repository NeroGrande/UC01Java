/*
7) Crie uma função para cada uma das 4 operações aritméticas (soma, subtração, divisão e multiplicação). 
Depois crie um programa que leia dois números e de acordo com a operação solicitada, chame a função 
responsável pela operação.
*/

function calcular(a, b, op) {
  if (op === "+") return a + b;
  if (op === "-") return a - b;
  if (op === "*") return a * b;
  if (op === "/") return b !== 0 ? a / b : "Erro: divisão por zero!";
  return "Operação inválida!";
}

let num1 = parseFloat(prompt("Digite o primeiro número:"));
let num2 = parseFloat(prompt("Digite o segundo número:"));
let op = prompt("Escolha a operação: +, -, * ou /");

alert("O resultado é: " + calcular(num1, num2, op));