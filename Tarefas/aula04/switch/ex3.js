/*
3. Crie um programa que receba o número de um dia da semana (1 a 7) e imprima o nome do dia correspondente. Por exemplo, se a 
entrada for 1, o programa deve imprimir "Domingo", se for 2, "Segunda-feira" e assim por diante. Utilize a estrutura switch
*/

function obterDiaDaSemana(dia) {
    switch (dia) {
        case 1:
            return "Domingo";
        case 2:
            return "Segunda-feira";
        case 3:
            return "Terça-feira";
        case 4:
            return "Quarta-feira";
        case 5:
            return "Quinta-feira";
        case 6:
            return "Sexta-feira";
        case 7:
            return "Sábado";
        default:
            return "Dia inválido. Por favor, insira um número de 1 a 7.";
    }
}

// Exemplo de uso
const dia = 3; // Altere o número do dia conforme necessário
console.log(`O dia correspondente ao número ${dia} é: ${obterDiaDaSemana(dia)}`);