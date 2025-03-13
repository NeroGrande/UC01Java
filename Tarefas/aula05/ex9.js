/*
9. Crie um programa que peça ao usuário para digitar um número entre 1 e 10. 
O programa deve continuar pedindo o número até que o usuário digite um número válido.
*/

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function pedirNumero() {
  rl.question("Digite um número entre 1 e 10: ", function(numero) {
    let num = Number(numero); // Converte para número

    if (num >= 1 && num <= 10) {
      console.log(`Você digitou um número válido: ${num}`);
      rl.close(); // Fecha a interface após receber um número válido
    } else {
      console.log("Número inválido. Tente novamente.");
      pedirNumero(); // Chama novamente a função se o número não for válido
    }
  });
}

pedirNumero(); // Chama a função para iniciar o programa
