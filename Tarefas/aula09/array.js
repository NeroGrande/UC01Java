let frutas = ["maça", "banana", "morango"]
console.log(frutas)
console.log(frutas[0]);
console.log(frutas[1]);
console.log(frutas[2]);

//o que ocorre se o índice não existir?

console.log(frutas[3]);
if (frutas[3] == undefined) {
    console.log("nenhuma fruta");
}

//adicionar um elemento no final: push()

frutas.push("goiaba");
console.log(frutas);

// let nomeFruta = prompt("informe a fruta");
// frutas.push (nomeFruta);
// console.log(frutas);

//remover o ultimo elemento: pop()
frutas.pop();
console.log(frutas);

// ordenar um array string: sort()

frutas.sort
console.log(frutas);

// copiar um array: [...array_a_ser_copiado]

let copia = [...frutas]
console.log(copia);

//contar o tamanho do array: length()
console.log("O tamanho é:" + frutas.length);

//escolher um elemento aleatorio: random()
let aleatorio = Math.floor(Math.random() *
    frutas.length);
console.log(frutas[aleatorio])
