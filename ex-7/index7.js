// 7. Faça um algoritmo que leia quanto dinheiro uma pessoa tem na carteira (em R$) e mostre quantos dólares ela pode comprar. Considere US$1,00 = R$5,60.

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Pergunta o nome do usuário
rl.question("Digite seu nome: ", function(nome) {
    // Pergunta quanto dinheiro a pessoa tem na carteira
    rl.question("Digite quanto dinheiro você tem na carteira (em R$): ", function(valor) {
        // Converte a entrada para um número
        let reais = parseFloat(valor);
        
        // Taxa de câmbio (R$ 5,60 por US$ 1,00)
        const taxaCambio = 5.60;

        // Calcula quantos dólares a pessoa pode comprar
        let dolares = reais / taxaCambio;

        // Exibe o resultado
        console.log(`${nome}, com R$ ${reais.toFixed(2)} você pode comprar US$ ${dolares.toFixed(2)}.`);

        // Fecha a interface de leitura
        rl.close();
    });
});
