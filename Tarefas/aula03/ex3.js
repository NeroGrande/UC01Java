/*3. Construir um programa onde um vendedor irá digitar quanto ele vendeu em um mês na loja. 
Caso esse total de vendas seja maior ou igual a R$ 100.000,00, o programa irá calcular uma comissão de 4% sobre suas vendas, 
mas caso a venda seja menor, o programa calculará apenas 2%.*/

//RESOLUÇÃO
let vendas = parseInt(prompt("Digite o total das vendas do mês:"));
let comissao;

if (vendas >= 100000) {
    comissao = vendas * 0.04;
    //adicioando o else if
} else if (vendas < 100000 && vendas >= 50000) {
    comissao = vendas * 0.02;

} else {
    comissao = vendas * 0.01;
}
document.write("A comisão foi de:" + comissao)