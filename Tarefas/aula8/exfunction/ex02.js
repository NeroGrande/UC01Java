/*
2) Crie uma Função que Calcula e informa Média de Notas de um aluno
*/

function verificarNotas(notas) {
    let media = '';
    if (notas > 6){
        media = "Na Média";
    } else {
        media = "Recuperação"
    }
    return media 
}

let nota = parseInt(prompt("Digite Sua nota Da Prova:"))
let resposta = verificarNotas(notas)
alert(resposta)