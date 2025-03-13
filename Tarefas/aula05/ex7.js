/*
7. Crie um programa que exiba todos os números pares entre 1 e 20 utilizando um laço
*/ 

exerc7
let i = 1;

while (i <= 20){
    if(i % 2 ==0 ){
        console.log("é par " +i)

    }else {
        console.log("É impar " + i)
    }
   
    i++;
}

// Fim do programa

/*
Resolução do exercício 7:(Feita pelo professor)
/* 7. Crie um programa que exiba todos os números pares entre 1 e 20 utilizando um laço
let i = 1;  // inicializa a variável com 1
while (i <= 20){  // enquanto i for menor ou igual a 20
    if (i % 2 == 0){ // resto da divisão por 2 igual a 0
        console.log(i); // escreve o número por ser par
    }
    i++ //atualiza o valor de i até 20
}
*/

