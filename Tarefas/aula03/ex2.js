/* 2. Construir um programa onde o usuário saberá o valor do seu colesterol. Caso o valor seja menor que 180, 
o programa irá escrever na tela “Saúde Ok”; caso contrário, o programa escreverá na tela 
“Vamos procurar uma ajuda médica?” */

//RESOLUÇÃO
let col = parseInt(prompt("informe seu Colesterol:"));

if (col < 180) {
    alert("Saúde OK");

} else {
    alert("Vamos Procurar uma ajuda médica");
}