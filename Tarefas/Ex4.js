//4. Construir uma página na qual o usuário digitará 2 números 
//e o programa exibirá, na tela, o resultado das 
//quatro operações básicas da matemática.

let num = parseInt(prompt("Digite um número:"));

let valor = parseInt(prompt("Digite outro número:"));

let soma = num+valor;
let subtracao = num-valor;
let multiplicacao = num*valor;
let divisao = num/valor;

alert ("Resultado Somando Sera: "+soma+"");
alert ("Resultado Subtraindo Sera: "+subtracao+"");
alert ("Resultado Multiplicando Sera: "+multiplicacao+"");
alert ("Resultado Dividindo Sera: "+divisao+"");
