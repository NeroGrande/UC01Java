let nota = parseFloat(prompt("Nota"));
if (nota < 0 || nota > 10) {
    alert("Nota Inválida");
} else if (nota >= 0 && nota < 4) {
    alert("aluno reprovado");
} else if (nota >= 4 && nota < 7) {
    alert("Aluno em Recuperação");
    let recup = parseFloat(prompt("Nota da recuperação"));
    if (recup < 5) {
        alert("Aluno reprovado");
    } else {
        alert("Aluno aprovado na Recuperação");
    }
} else {
    alert("Aluno Aprovado");
}