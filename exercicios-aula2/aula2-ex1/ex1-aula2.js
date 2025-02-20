// Escreva um programa que pergunte a velocidade de um carro.
//  Caso ultrapasse 80Km/h, exiba uma mensagem dizendo que o usuário fo
// i multado e exiba o valor da multa, cobrando R$5 por cada Km acima da velocidade
//  permitida

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite a velocidade do carro (Km/h): ", function(velocidade) {
    let vel = parseFloat(velocidade); // Converter a entrada para número
    
    if (vel > 80) {
        let multa = (vel - 80) * 5;
        console.log(`Você foi multado! O valor da multa é R$ ${multa.toFixed(2)}.`);
    } else {
        console.log("Velocidade dentro do limite permitido.");
    }

    rl.close(); // Fechar corretamente o readline
});
