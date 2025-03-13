/*
4. Construir um programa no qual o usuário digitará um número e o programa fará a tabuada de
multiplicação deste número.

*/
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Digite um número: ", function (numero) {
  let num = Number(numero); // Converte para número
  if (!isNaN(num)) { // Verifica se é um número válido
    console.log(`\nTabuada de ${num}:`);
    let i = 1;
    while (i <= 10) {
      console.log(num + " x " + i + " = " + (num * i));
      i++;
    }
  } else {
    console.log("Digite um número válido.");
  }

  rl.close();
});

// Fim do programa


// Resolução do exercício 4:(Feita pelo professor)

/*
let calc;
let i = 1;
numero = parseInt(prompt("informe o número"));
while (i <= 10) {
    calc = numero * i;
    console.log(numero + " x " + i + " = " + calc);
    i++;
}
    Fim do programa
*/