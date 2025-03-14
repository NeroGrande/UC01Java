/*
9. Crie um programa que peça ao usuário para digitar um número entre 1 e 10. O programa 
deve continuar pedindo o número até que o usuário digite um número válido.
*/











let valor = 0;
for (let i = 1; i <= 10; i++){
    valor = parseInt(prompt("numero"));
    if (valor > 10 || valor < 0){
        console.log("Número inválido");
    } else {
        console.log("Número válido");
        break;
    }
}
