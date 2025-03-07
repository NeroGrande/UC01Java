/* construa um codigo/site,utilizando o comando Switch,. O usuario irá digitar um desses três conceitos 
(A,PA ou NA). Caso ele escolha A, escreverá na tela “Atendido”; caso ele escolha PA, o programa escreverá na tela
“Parcialmente Atendido”; ou caso ele digite NA, o programa colocará na tela “Não Atendido”.*/

let atendimento = (prompt("Digite a situação do cliente:"))

// toUpperCase (converte a letra  para Maiusculo)

switch (atendimento.toUpperCase()) {
    case 1: "A"
        alert("Atendido");
        break

    case 2: "Pa"
        alert("Parcialmente Atendido");
        break

    case 3:"Na"
        alert("Não Atendido");
        break

}  