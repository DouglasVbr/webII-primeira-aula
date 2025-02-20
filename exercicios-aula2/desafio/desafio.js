// DESAFIO Crie um programa que leia o tamanho de três segmentos de reta.
//  Analise seus comprimentos e diga se é possível formar um triângulo com essas
//  retas.Matematicamente, para três segmentos formarem um triângulo, o comprimento
//  de cada lado deve ser menor que a soma dos outros dois

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});


rl.question("Digite o comprimento do primeiro lado: ", function(lado1) {
    rl.question("Digite o comprimento do segundo lado: ", function(lado2) {
        rl.question("Digite o comprimento do terceiro lado: ", function(lado3) {
            let a = parseFloat(lado1);
            let b = parseFloat(lado2);
            let c = parseFloat(lado3);

            if (a + b > c && a + c > b && b + c > a) {
                console.log("Os segmentos podem formar um triângulo.");
            } else {
                console.log("Os segmentos NÃO podem formar um triângulo.");
            }

            rl.close();
        });
    });
});
