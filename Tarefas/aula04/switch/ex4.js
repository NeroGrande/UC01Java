/* 
4. Crie um programa que simule o comportamento de um semáforo. O programa deve receber uma cor 
do semáforo (verde, amarelo ou vermelho) e imprimir a ação correspondente: "Siga", "Atenção" 
ou "Pare". Use a estrutura switch para essa tarefa.
*/



function acaoSemaforo(cor) {
    switch (cor.toLowerCase()) { // Converte a cor para minúsculas para garantir a comparação correta
        case "verde":
            return "Siga";
        case "amarelo":
            return "Atenção";
        case "vermelho":
            return "Pare";
        default:
            return "Cor inválida! Por favor, insira 'verde', 'amarelo' ou 'vermelho'.";
    }
}

// Solicitar ao usuário que insira a cor do semáforo
const corSemaforo = prompt("Digite a cor do semáforo (verde, amarelo ou vermelho): ");
alert(acaoSemaforo(corSemaforo));