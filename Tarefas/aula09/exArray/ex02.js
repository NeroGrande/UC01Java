/*
2) Peça ao usuário para digitar três números e armazene-os 
em um vetor, depois exiba o maior número
*/

let valorMaior = 0
let valores = [];
let valor
// popular array
for (let i = 0; i < 3; i++) {
    valor = parseInt(prompt("Digite os valores:"));
    valores.push(valor);
}
// verificar o maior valor
for (let i = 0; i < 3; i++) {
    if (valores[i] > valoresMaior) {
        valorMaior = valores[i];
    }
}
console.log("O maior valor é:" + valorMaior)
