/*
O usário de uma página de games digitará sua pontuação.Caso digite um valor acima de 1000 o program retorna "usuario vip", caso contrario
retorne: "aumente sua pontuação para ser vip"
*/

let pont = parseFloat(prompt("Digite a pontuação"))
let resultado = pont > 1000 ? "Usuario Vip" : "Aumente sua pontuação para ser vip";
alert(resultado);