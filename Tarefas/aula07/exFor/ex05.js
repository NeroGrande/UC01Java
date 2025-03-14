/*
5. Crie um programa que peça um número N e calcule 
a soma de todos os números de 1 até N.
*/

let num = parseInt(prompt("Digite um número"));
let soma = 0;
for (let i = 0; i <=num; i++){
  soma +=1;
}
document.write("A soma dos números é:"+soma);
