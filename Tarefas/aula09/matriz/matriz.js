// matriz = confg de arrays ou arrys tridimencional

let matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
console.log(matriz);

//acessando os elementos da matriz 
console.log(matriz[0][1]); // linha 0 coluna 1
console.log(matriz[2][2]); // linha 2 coluna 2 

//modificar um valor 
matriz[1][1] = 99;
console.log(matriz);
// percorrendo a matriz com loop

for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++)
        console.log(matriz[i][j]);
}

//matriz com preenchimento do usuario 

let numeros = []; // criação da matriz vazia 

let linhas = 3; // informando a qtd de linhas 
let colunas = 3; // qtd de colunas 

// preecchendo a matriz com valores informados 

for (let i = 0; i < linhas; i++) {
    numeros[i] = [] //criando nova linha
    for (let j = 0; j < colunas; j++) {
        numeros[i][j] = parseInt(prompt("Valor para a posição"["+i+"]["+j+"]));
    }
}

//exibindo a matriz 
console.log(numeros); 
