/*
Questão 15: Crie uma variável escolha e atribua um valor entre 1 e 3. Usando switch, exiba uma 
mensagem diferente para cada escolha (1 = "Opção 1", 2 = "Opção 2", 3 = "Opção 3").
*/


let escolha = 2; // Atribua um valor entre 1 e 3 à variável

switch (escolha) {
  case 1:
    console.log("Opção 1");
    break;
  case 2:
    console.log("Opção 2");
    break;
  case 3:
    console.log("Opção 3");
    break;
  default:
    console.log("Escolha inválida");
}