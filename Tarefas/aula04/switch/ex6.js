/*6. Crie um programa que, com base no número do mês (1 a 12), informe a estação do ano correspondente. 
Utilize um switch de estrutura. A correspondência entre os meses e as estações é a seguinte: 

1, 2, 3: Verão 
4, 5, 6: Outono 
7, 8, 9: Inverno 
10, 11, 12: Primavera 

*/
function getEstacaoDoAno(mes) {
    switch (mes) {
        case 1: case 2: case 3:
            return "Verão";
        case 4: case 5: case 6:
            return "Outono";
        case 7: case 8: case 9:
            return "Inverno";
        case 10: case 11: case 12:
            return "Primavera";
        default:
            return "Mês inválido. Digite um número entre 1 e 12.";
    }
}

// Exemplo de uso
const mes = parseInt(prompt("Digite o número do mês (1 a 12):"));
alert("A estação correspondente é: " + getEstacaoDoAno(mes));
