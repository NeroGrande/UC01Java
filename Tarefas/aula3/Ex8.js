/* 3. Desenvolva um pequeno script onde o usuário digitará o valor de um
investimento. O programa retornará 30% do valor digitado para que 
esse investidor saiba quanto irá render tal investimento.*/

let valorInvestimento = parseFloat(prompt("Digite o Valor: "))

investimento = valorInvestimento * 0.30;

document.write ("Rendeu:" +valorInvestimento);