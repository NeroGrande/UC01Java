/*2. Crie um programa que, dado um número inteiro e um operador (+, -, *, /), realize a operação matemática correspondente 
entre o número e o valor 10. O programa deve utilizar a estrutura switch para realizar a operação.
Exemplo de entrada: "5, +" (resultado esperado: 5 + 10 = 15).*/

function calcular(numero, operador) {
    let resultado;

    switch (operador) {
        case "+":
            resultado = numero + 10;
            break;
        case "-":
            resultado = numero - 10;
            break;
        case "*":
            resultado = numero * 10;
            break;
        case "/":
            if (numero !== 0) {
                resultado = numero / 10;
            } else {
                resultado = "Erro: divisão por zero";
            }
            break;
        default:
            resultado = "Operador inválido";
    }

    return resultado;
}

// Entrada do usuário
let entrada = prompt("Digite um número e um operador (ex: 5, +):");
let partes = entrada.split(",");


/*
RESOLUÇÃO DO PROFESSOR
let operador = (prompt("Digite Operador"))
let num = parseInt(prompt("Digite os Valores"))

switch (operador) {
  case ("+"):
      alert("resultado com operador da soma - seguido do numero 10 é" + (num + 10));
      break;
  case ("-"):
      alert("resultado com operador de diminuição - seguido do numero 10 é" + (num - 10));
      break;
  case ("/"):
      alert("resultado com operador de divisão - seguido do numero 10 é" + (num / 10))
      break;
  case ("*"):
      alert("resultado com operador de multiplicação - seguido do numero 10 é" + (num * 10))
      break;
  default:
      alert("Operador Inválido");
}
*/