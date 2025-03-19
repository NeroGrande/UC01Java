/*
Atividade Prática: Criando um Jogo Simples

O recrutador pediu para desenvolver um Jogo da Batalha Naval (versão simplificada).Descrição da Atividade:

. Criar uma matriz 5x5 que representa o oceano.
. Um navio estará posicionado em uma coordenada aleatória.
. O jogador deve tentar acertar o navio, informando uma linha e uma coluna.
. O programa informa se o tiro acertou ou errou.

*/

let matriz = [
    [0,0,0,0,0],
    [0,0,0,0,0],
    [0,0,1,0,0],
    [0,0,0,0,0],
    [0,0,0,0,0]
]

let navioLinha = Math.floor(Math.random() * 5); // Número de 0 a 4
let navioColuna = Math.floor(Math.random() * 5);
oceano[navioLinha][navioColuna] = 1; // Posiciona o navio na matriz

// Pedindo para o jogador tentar acertar
let linha = parseInt(prompt("Informe a linha (0 a 4):"));
let coluna = parseInt(prompt("Informe a coluna (0 a 4):"));

// Verificando se acertou
if (linha === navioLinha && coluna === navioColuna) {
    alert("Parabéns! Você acertou o navio!");
} else {
    alert("Errou! O navio estava em (" + navioLinha + "," + navioColuna + "). Tente novamente.");
}