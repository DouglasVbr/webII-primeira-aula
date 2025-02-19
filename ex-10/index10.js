// 10. Faça um algoritmo que leia o salário de um funcionário, calcule e mostre o seu novo salário, com 15% de aumento.

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Pergunta o nome do funcionário
rl.question("Digite seu nome: ", function(nome) {
    // Pergunta o salário atual
    rl.question("Digite o seu salário atual (em R$): ", function(salario) {
        // Converte a entrada para número
        let salarioAtual = parseFloat(salario);

        // Calcula o novo salário com 15% de aumento
        const aumento = salarioAtual * 0.15;
        let novoSalario = salarioAtual + aumento;

        // Exibe o resultado
        console.log(`${nome}, com um aumento de 15%, seu novo salário será de R$ ${novoSalario.toFixed(2)}.`);

        // Fecha a interface de leitura
        rl.close();
    });
});
