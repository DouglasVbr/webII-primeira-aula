// Escreva um programa que leia o ano de nascimento de um rapaz
//  e mostre a sua situação em relação ao alistamento militar

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Digite o ano de nascimento: ", function (anoNascimento) {
  let anoAtual = new Date().getFullYear();
  let idade = anoAtual - parseInt(anoNascimento);

  if (idade <= 18) {
    console.log(`Faltam ${18 - idade} anos para o alistamento.`);
  } else if (idade === 18) {
    console.log("Está na hora de se alistar!");
  } else {
    console.log(`Você deveria ter se alistado há ${idade - 18} anos atrás.`);
  }

  rl.close();
});
