//Numa promoção exclusiva para o Dia da Mulher, uma loja quer dar descontos
//para todos, mas especialmente para mulheres.
//Faça um programa que leia nome, sexo e o valor das compras do
//cliente e calcule o preço com desconto

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Digite seu nome: ", function (nome) {
  rl.question("Digite seu sexo (M/F): ", function (sexo) {
    rl.question("Digite o valor das compras (R$): ", function (valor) {
      let desconto = sexo.toUpperCase() === "F" ? 0.13 : 0.05;
      let valorFinal = parseFloat(valor) * (1 - desconto);

      console.log(
        `${nome}, o valor final da compra com desconto é R$ ${valorFinal.toFixed(
          2
        )}.`
      );
      rl.close();
    });
  });
});
