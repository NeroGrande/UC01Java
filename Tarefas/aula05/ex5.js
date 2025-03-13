/*
5. Crie um programa que peça um número N e calcule a soma de todos os números de 1 até N.
*/

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Digite um número N: ", function(numero) {
  let n = Number(numero); // Converte para número
  let soma = 0;
  let i = 1;

  if (isNaN(n)) {
    console.log("Por favor, digite um número válido.");
  } else {
    while (i <= n) {
      soma += i; // Adiciona i à soma
      i++; // Incrementa i
    }
    console.log(`A soma dos números de 1 até ${n} é: ${soma}`);
  }

  rl.close();
});



/*
Resolução do exercício 5:(Feita pelo professor)

// correção exercício 5
let n = parseInt(prompt("Digite um número"));
let i = 1;
let soma = 0;
while (i<=n){
    soma += i;
}
*/