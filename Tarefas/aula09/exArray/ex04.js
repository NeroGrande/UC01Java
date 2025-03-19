/*
4. Peça ao usuário 3 nomes, e adicione-os em um array, e exiba depois a lista de forma ordenada
*/

let vetor = [];
let nome = "";
for (let i = 0; i < 3; i++) {
    nome = prompt('Digite um nome para armazenar na array:');
    vetor.push(nome);
}
// exibir de forma ordenada
let resposta = [...vetor.sort()];
for (let i = 0; i < 3; i++) {
    document.write(resposta[i] + "br");
}