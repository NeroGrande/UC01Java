/*
5. Crie um programa que classifique uma nota de 0 a 10 de acordo com a seguinte tabela:
9 a 10: Aprovado com Distinção
7 a 8.9: Aprovado
5 a 6.9: Recuperação
0 a 4.9: Reprovado
Utilize a estrutura switch para exibir a classificação.
*/

function classificarNota(nota) {
    switch (true) { // Usamos true para fazer comparações de intervalo
        case (nota >= 9 && nota <= 10):
            return "Aprovado com Distinção";
        case (nota >= 7 && nota <= 8.9):
            return "Aprovado";
        case (nota >= 5 && nota <= 6.9):
            return "Recuperação";
        case (nota >= 4.9 && nota <= 0):
            return "Reprovado";
        default:
            return "Nota inválida! Por favor, insira uma nota de 0 a 10.";
    }
}

// Solicitar ao usuário que insira a nota
const notaUsuario = parseFloat(prompt("Digite a nota (0 a 10): "));
alert(classificarNota(notaUsuario));
