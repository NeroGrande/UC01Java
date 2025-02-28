/*6. Faça um programa onde o usuário digitará o seu salário e o 
programa escreverá, na tela, o valor que será descontado de vale-transporte 
(6%), de INSS (no momento descontar 8%) e quanto sobrará de salário.
*/

let produto = parseFloat(prompt("Informe o Salário: "));

let valet = salario * 0.06;
let inss = salario * 0.08;
let novoSalario = salario - (valet + inss);
document.write("O Novo salário é:"+novoSalario)