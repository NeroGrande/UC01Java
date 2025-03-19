/*
3. Crie um vetor com cinco números e exiba apenas os números pares
*/

let valores = []
let valor

for (let i = 0; i < 5; i++) {
    valor = parseInt(prompt("Digite os valores: "))
    valores.push(valor);
}

for (let i = 0; i < valores.length; i++) {
    if (valores[i] % 2 == 0) {
        document.write("É par: " + valores[i] + "<br>")
    }
}