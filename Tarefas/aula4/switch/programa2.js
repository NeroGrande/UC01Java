/*Monte um programa para ler o número do mês (1-12)
e escreva o nome do mês usando estrutura de condição switch
*/

let mes = parseInt(prompt("Informe o número do mês"));

switch (mes) {
    case 1:
        alert("janeiro");
        break
    case 2:
        alert("fevereiro");
        break
    case 3:
        alert("Março");
        break
    case 4:
        alert("Abril");
        break
    case 5:
        alert("Maio");
        break
    case 6:
        alert("Junho");
        break
    case 7:
        alert("Julho");
        break
    case 8:
        alert("Agosto");
        break
    case 9:
        alert("Setembro");
        break
    case 10:
        alert("Outubro");
        break
    case 11:
        alert("Novembro");
        break
    case 12:
        alert("Dezembro");
        break
    default:
        alert("Número informado é invalido");
}   