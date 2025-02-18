//4. Desenvolva um algoritmo que leia dois números inteiros e mostre o somatório entre eles.

const readline = require("readline"); // importa o módulo readline

// cria uma interface de leitura para entrada e saída de dados
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
// pedindo o primeiro número inteiro
rl.question("Digite o primeiro número inteiro: ", (num1) => {
  // pedindo o segundo número inteiro
  rl.question("Digite o segundo número inteiro: ", (num2) => {
    // convertendo os valores de string para número
    let soma = parseInt(num1) + parseInt(num2);

    console.log(`O somatório entre ${num1} e ${num2} é: ${soma}`);

    rl.close(); // fecha a interface após a captura dos dados
  });
});
