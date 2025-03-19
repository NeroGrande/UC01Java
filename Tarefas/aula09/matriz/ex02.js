/*
Dado um sistema que armazena notas de alunos em uma matriz 3x3, realize as seguintes atividades:

. Criar uma matriz 3x3 preenchida com valores numéricos representando as notas dos alunos.
. Exibir a matriz no console de forma organizadaCalcular e exibir a média das notas de cada aluno.
. Identificar e exibir a maior nota da matriz.
. Substituir todas as notas menores que 6 por 6, garantindo que nenhum aluno fique com nota abaixo desse valor.
*/

console.log("Matriz de Notas:");
for (let i = 0; i < notas.length; i++) {
    console.log(notas[i].join(" ")); // deixa espaçamento
}

// 3. Calcular e exibir a média de cada aluno
console.log("\nMédias dos alunos:");
for (let i = 0; i < notas.length; i++) {
    let soma = 0;
    for (let j = 0; j < notas[i].length; j++) {
        soma += notas[i][j];
    }
    let media = soma / notas[i].length;
    console.log(`Aluno ${i + 1}: ${media.toFixed(2)}`);
}

// 4. Identificar e exibir a maior nota da matriz
let maiorNota = notas[0][0];
for (let i = 0; i < notas.length; i++) {
    for (let j = 0; j < notas[i].length; j++) {
        if (notas[i][j] > maiorNota) {
            maiorNota = notas[i][j];
        }
    }
}
console.log(`\nMaior nota: ${maiorNota}`);