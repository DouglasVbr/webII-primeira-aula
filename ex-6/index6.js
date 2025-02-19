// 6. Faça um programa que leia um número inteiro e mostre o seu antecessor e seu sucessor.

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Pergunta o nome do usuário
rl.question("Digite seu nome: ", function(nome) {
    // Pergunta um número inteiro
    rl.question("Digite um número inteiro: ", function(numero) {
        // Converte a entrada para um número inteiro
        let num = parseInt(numero);

        // Calcula o antecessor e o sucessor
        let antecessor = num - 1;
        let sucessor = num + 1;

        // Exibe os resultados
        console.log(`${nome}, o antecessor de ${num} é ${antecessor} e o sucessor é ${sucessor}.`);

        // Fecha a interface de leitura
        rl.close();
    });
});
