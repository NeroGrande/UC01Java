/*
3. Construir um programa no qual o usuário digitará um número e o programa fará a contagem
regressiva deste número, até o número 0.
*/


let valor = parseInt(prompt("Digite o valor da contagem:"))

for (let i = valor; i >= 0; i--){
    document.write("Contagem regressiva: " + i + "<br>")
}