/*

1) Crie uma função chamada verificarNumero(n) que recebe um número inteiro e retorna:
"Positivo", se o número for maior que zero.
"Negativo", se for menor que zero.
"Zero", se for exatamente zero

*/
function verificarNumero(numero){
    if (numero < 0){
        return 'Número negativo'
     } else if (numero === 0) {
        return 'Zero'
     } else {
        return 'Número positivo'
     }
}

let num = Number(prompt('Digite o número: '))
let resultado = verificarNumero(num)
alert(resultado)