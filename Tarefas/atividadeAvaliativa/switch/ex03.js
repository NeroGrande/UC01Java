/*
Questão 13: Crie uma nota variável e atribua um valor numérico entre 0 e 10. Usando switch, 
exiba uma mensagem sobre a aprovação ou reprovação dependendo da nota. (Exemplo: 0-3 = 
"Reprovado", 4-6 = "Recuperação", 7-10 = "Aprovado").
*/

let nota = 6; // Atribua um valor entre 0 e 10 à variável

switch (true) {
  case (nota >= 0 && nota <= 3):
    console.log("Reprovado");
    break;
  case (nota >= 4 && nota <= 6):
    console.log("Recuperação");
    break;
  case (nota >= 7 && nota <= 10):
    console.log("Aprovado");
    break;
  default:
    console.log("Nota inválida");
}
