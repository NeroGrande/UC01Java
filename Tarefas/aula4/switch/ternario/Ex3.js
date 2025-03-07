/* 9. Solicite ao usuário para digitar a temperatura em graus Celsius. Caso a temperatura seja 
superior a 30°C, exiba a mensagem "Muito quente". Senão exiba "Temperatura agradável". 
*/

let temp = parseInt(prompt("Digite A temperatura Em Graus Celsius:"))
let resultado = temp > 30 ? "Muito Quente." : "Temperatura Agradável."
alert(resultado)