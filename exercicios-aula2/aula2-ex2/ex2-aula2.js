// Faça um algoritmo que leia um determinado ano e mostre se ele é ou não BISSEXTO

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Digite um ano: ", function (ano) {
  ano = parseInt(ano);

  if ((ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0) {
    console.log(`${ano} é um ano bissexto.`);
  } else {
    console.log(`${ano} não é um ano bissexto.`);
  }

  rl.close();
});
