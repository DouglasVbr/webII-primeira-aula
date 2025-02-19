// 5. Faça um programa que leia as duas notas de um aluno em uma matéria e mostre na tela a sua média na disciplina.

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Pergunta o nome do aluno
rl.question("Digite seu nome: ", function(nome) {
    // Pergunta a primeira nota
    rl.question("Digite a primeira nota: ", function(nota1) {
        // Pergunta a segunda nota
        rl.question("Digite a segunda nota: ", function(nota2) {
            // Converte as notas para números e calcula a média
            let media = (parseFloat(nota1) + parseFloat(nota2)) / 2;

            // Exibe a média do aluno
            console.log(`A média do aluno ${nome} é: ${media}`);

            // Fecha a interface de leitura
            rl.close();
        });
    });
});
