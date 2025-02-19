// 9. Crie um programa que leia o número de dias trabalhados em um mês e mostre o salário de um funcionário, sabendo que ele trabalha 8 horas por dia e ganha R$25 por hora trabalhada.

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Pergunta o nome do funcionário
rl.question("Digite seu nome: ", function(nome) {
    // Pergunta o número de dias trabalhados no mês
    rl.question("Digite o número de dias trabalhados no mês: ", function(diasTrabalhados) {
        // Converte a entrada para número inteiro
        let dias = parseInt(diasTrabalhados);

        // Definições do salário
        const horasPorDia = 8;
        const valorPorHora = 25;

        // Calcula o salário
        let salario = dias * horasPorDia * valorPorHora;

        // Exibe o resultado
        console.log(`${nome}, seu salário no mês será de R$ ${salario.toFixed(2)}.`);

        // Fecha a interface de leitura
        rl.close();
    });
});
