/*
5. Crie um array com os dias da semana, e peça para o usuário informar um número (1 à 7). Exiba o nome do dia correspondente
*/

let diasSemana = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];

let numero = parseInt(prompt("Digite um número de 1 a 7:"));

if (numero >= 1 && numero <= 7) {
    console.log("O dia correspondente é:", diasSemana[numero - 1]);
} else {
    console.log("Número inválido! Digite um valor entre 1 e 7.");
}