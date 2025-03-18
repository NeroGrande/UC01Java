/*
6) Crie uma função chamada contarImpares(n), que recebe um número inteiro 
positivo e retorna quantos números ímpares existem de 1 até N.
*/

function obterMes(numero) {
  const meses = [
      "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", 
      "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
  ];

  if (numero >= 1 && numero <= 12) {
      alert("O mês correspondente é: " + meses[numero - 1]);
  } else {
      alert("Número inválido! Digite um número entre 1 e 12.");
  }
}

// Exemplo de uso:
let numeroMes = prompt("Digite um número de 1 a 12:");
obterMes(parseInt(numeroMes));

// Fim Do Programa
