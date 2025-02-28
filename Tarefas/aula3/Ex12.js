// 7. Faça um programa que leia duas notas e informe a média aritmética

let nota = parseFloat(prompt("Digite a nota"));
let n2 = parseFloat(prompt("Digite a nota"));

let media = nota * n2 /2;

document.write("A média será:"+media.toFixed(1));

//toFixed arredonda o valor
//(1) quantidade de casas decimais