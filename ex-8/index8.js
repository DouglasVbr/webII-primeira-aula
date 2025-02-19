// 8. Faça um algoritmo que leia a largura e altura de uma parede e mostre a área a ser pintada e a quantidade de tinta necessária para o serviço, sabendo que cada litro de tinta pinta uma área de 2 metros quadrados.

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Pergunta o nome do usuário
rl.question("Digite seu nome: ", function(nome) {
    // Pergunta a largura da parede
    rl.question("Digite a largura da parede (em metros): ", function(largura) {
        // Pergunta a altura da parede
        rl.question("Digite a altura da parede (em metros): ", function(altura) {
            // Converte as entradas para números
            let larg = parseFloat(largura);
            let alt = parseFloat(altura);

            // Calcula a área da parede
            let area = larg * alt;

            // Cada litro de tinta cobre 2m²
            const rendimentoTinta = 2;
            let quantidadeTinta = area / rendimentoTinta;

            // Exibe os resultados
            console.log(`${nome}, a área da parede é de ${area.toFixed(2)} m².`);
            console.log(`Você precisará de aproximadamente ${quantidadeTinta.toFixed(2)} litros de tinta para pintá-la.`);

            // Fecha a interface de leitura
            rl.close();
        });
    });
});
