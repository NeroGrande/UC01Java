/*
O usuario digitará sua idade e o programa irá informar se é maior ou maior ou menor de idade 
*/

let idade = parseInt(prompt("Digite sua idade"));
let resultado = idade < 18 ? "Menor de idade" : "Maior de idade";
alert(resultado);