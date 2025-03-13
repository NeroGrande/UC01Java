/*
6. Crie um programa que faça uma contagem regressiva de 10 até 1 e, em seguida, 
imprima "Feliz Ano Novo!".
*/

let valor = parseInt(prompt("Digite um número"));
let i = 0
let resultado;
let text
while (i <= 10){
    resultado = valor * i;
    text = (valor + "x" + i, resultado)  
    console.log(text)
    i++;
}


/*
Resolução do exercício 6:(Feita pelo professor)
6. Crie um programa que faça uma contagem regressiva de 10 até 1 e, em seguida, imprima "Feliz Ano Novo!".
let i = 10;
while (i>=1) {
    console.log(i);
    i--;
}
console.log("Feliz Ano Novo!");
*/