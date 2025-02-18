//3. Faça um programa que leia o nome do funcionário e seu salário e mostre uma mensagem como a do exemplo: O funcionário Lucas recebe R$2000,00 por mês.

const readline = require("readline"); // importa o módulo readline

// cria uma interface de leitura para entrada e saída de dados
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// pedindo para que o usuário informe seu nome e captura o dado
rl.question("Escreva seu nome: ", (nome) => {
  console.log(`Olá, seja bem-vindo 🎮, ${nome}!`);

  // pedindo para que o usuário informe seu salário e captura o dado
  rl.question("Escreva seu salário: ", (salario) => {
    console.log(`O funcionário ${nome} recebe R$${salario},00 por mês!`);

    rl.close(); // fecha a interface após a captura do dado
  });
});
