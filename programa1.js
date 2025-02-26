//let é uma palavra chave  usada para demonstrar variaveis 
//recebe a idade de 25 e depois recebe 26

// comentar linha 

/*
comentario de bloco

let idade = 25;
const pi = 3.14;

console.log("O valor de pi é: "+pi);
console.log(idade); // saida 25 

idade = 26;
console.log(idade); // saida 26

pi=3.15;
comsole.log(pi);
*/

let nome = prompt("informe seu nome"); 
// parseInt transforma uma string em um ineger(inteiro)
let idade = parseInt(prompt("informe sua idade"));

// parseInt transforma uma string para um float(decimal)
let altura = parseFloat(prompt("informe sua altura")); 


alert ("Nome é: "+nome+"<br>");
document.write ("Nome é:"/*typeof*/ +idade+"<br>");
document.write ("Nome é:"/*typeof*/ +altura+"<br>");
/*
//Leia dois valores e faça a soma
let valor1 = parseInt(prompt("valor1:")) 
let valor2 = prompt("valor2:")
let soma -(valor1 +valor2) 
documet.write(soma)
*/