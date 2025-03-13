/*
Questão 11: Crie uma variável dia e atribua um valor numérico de 1 a 7. Usando o switch, 
exiba o nome do dia correspondente (1 = "Domingo", 2 = "Segunda-feira", etc.).
*/

let dia = 3; // Atribua um valor numérico entre 1 e 7 à variável

switch (dia) {
  case 1:
    console.log("Domingo");
    break;
  case 2:
    console.log("Segunda-feira");
    break;
  case 3:
    console.log("Terça-feira");
    break;
  case 4:
    console.log("Quarta-feira");
    break;
  case 5:
    console.log("Quinta-feira");
    break;
  case 6:
    console.log("Sexta-feira");
    break;
  case 7:
    console.log("Sábado");
    break;
  default:
    console.log("Dia inválido");
}
