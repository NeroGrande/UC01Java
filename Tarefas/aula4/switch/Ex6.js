/*

6. Crie um programa que, com base no número do mês (1 a 12), informe a estação do ano 
correspondente. Utilize a estrutura switch. A correspondência entre os meses e as estações
é a seguinte:

1, 2, 3: Verão
4, 5, 6: Outono
7, 8, 9: Inverno
10, 11, 12: Primavera

*/

// Solicitar ao usuário que insira a nota

let numeroMes = parseInt(prompt("Digite o número do mês (1 a 12): "), 10);
alert(estacaoDoAno(numeroMes));

function estacaoDoAno(mes) 
    switch (mes) {
        case 1:
        case 2:
        case 3:
            return "Verão";
        case 4:
        case 5:
        case 6:
            return "Outono";
        case 7:
        case 8:
        case 9:
            return "Inverno";
        case 10:
        case 11:
        case 12:
            return "Primavera";
        default:
            return "Mês inválido! Por favor, insira um número de 1 a 12.";
    }
// Exemplo de uso

let mes = 3; // Altere o número do mês conforme necessário
console.log(`A estação do mês ${mes} é: ${obterEstacao(mes)}`)