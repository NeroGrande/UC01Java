const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Digite um número para a contagem regressiva: ", function (numero) {
  numero = parseInt(numero);

  if (isNaN(numero) || numero < 0) {
    console.log("Por favor, digite um número válido.");
    rl.close();
    return;
  }

  let intervalo = setInterval(() => {
    console.log(numero);
    numero--;

    if (numero < 0) {
      clearInterval(intervalo);
      console.log("Fim da contagem!");
      rl.close();
    }
  }, 1000);
});
// Fim do programa

/* 
// Resolução do exercício 3:(Feita pelo professor)
let numero = parseInt(prompt("Digite um número"));
while (numero >= 0) {
  console.log("Contando..: "+numero);
  numero--;
}
*/