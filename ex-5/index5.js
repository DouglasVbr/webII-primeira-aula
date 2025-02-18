//5. Faça um programa que leia as duas notas de um aluno em uma matéria e mostre na tela a sua média na disciplina.

const readline = require("readline"); // importa o módulo readline

// cria uma interface de leitura para entrada e saída de dados
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
     // pedindo a primeira nota
  rl.question("Digite a primeira nota: ", (nota1) => {
    
    // pedindo a segunda nota
    rl.question("Digite a segunda nota: ", (nota2) => {
      
      // convertendo os valores de string para número
      let n1 = parseFloat(nota1);
      let n2 = parseFloat(nota2);
      let media = (n1 + n2) / 2;

      console.log(`O aluno ${nome} tem média ${media.toFixed(2)} na disciplina.`);

      rl.close(); // fecha a interface após a captura dos dados
    });
  });


