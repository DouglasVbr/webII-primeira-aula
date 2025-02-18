//2. Faça um programa que leia o nome de uma pessoa e de boas vindas. ex.: “Olá, Lucas!”

const readline = require("readline"); // importa o módulo readline

// cria uma interface de leitura para entrada e saída de dados
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// pedindo para que o usuário informe seu nome e captura o dado
rl.question("Escreva seu nome: ", (nome) => {
  console.log(`Olá seja bem Vindo  🎮, ${nome}!`);

  rl.close(); // fecha a interface após a captura do dado
});
