/*
Questão 12: Crie uma variável cor e atribua uma cor qualquer (ex: "azul"). Usando o switch, 
exiba uma mensagem dependendo da cor escolhida (ex: "Cor escolhida é azul").
*/ 

let cor = "azul"; // Atribua uma cor à variável

switch (cor) {
  case "azul":
    console.log("Cor escolhida é azul");
    break;
  case "vermelho":
    console.log("Cor escolhida é vermelho");
    break;
  case "verde":
    console.log("Cor escolhida é verde");
    break;
  case "amarelo":
    console.log("Cor escolhida é amarelo");
    break;
  default:
    console.log("Cor não reconhecida");
}