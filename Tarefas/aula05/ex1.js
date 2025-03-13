/* 1. Uma empresa de tecnologia contratou você para realizar um pequeno script, que exibirá, na
tela, uma contagem regressiva de 10 até 0
*/
function contagemRegressiva() {
  let i = 10;
  let intervalo = setInterval(() => {
    console.log(i);
    i--;
    if (i < 0) {
      clearInterval(intervalo);
      console.log("Fim da contagem!");
    }
  }, 1000);
}

// Chamando a função
contagemRegressiva();
// Fim do programa 