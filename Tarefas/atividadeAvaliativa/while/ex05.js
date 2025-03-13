/*
Questão 20: Crie uma variável tentativas e atribua o valor 0. Usando while, 
solicite ao usuário um número até que ele acerte o número correto 
(por exemplo, 7), exibindo o número de tentativas feitas.

*/

let tentativas = 0; // Inicializa a variável tentativas com o valor 0
let numCorreto = 7; // Define o número correto que o usuário precisa adivinhar

// Inicia o laço while para solicitar tentativas até o número ser correto
while (true) {
  let numero = parseInt(prompt("Tente adivinhar o número (entre 1 e 10):")); // Solicita o número ao usuário
  
  tentativas++; // Incrementa o número de tentativas
  
  if (numero === numCorreto) { // Verifica se o número digitado é o correto
    console.log(`Parabéns! Você acertou o número após ${tentativas} tentativas.`);
    break; // Encerra o laço quando o número for acertado
  } else {
    console.log("Número incorreto, tente novamente.");
  }
}
