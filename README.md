# Exercícios de Programação em Node.js
## Este repositório contém 10 exercícios de programação em Node.js. Cada exercício está em uma pasta separada e possui um arquivo index.js que contém o código do exercício.

### Estrutura do Repositório
ex-1/
index.js

ex-2/
index2.js

ex-3/
index3.js

ex-4/
index4.js

ex-5/
index5.js

ex-6/
index6.js

ex-7/
index7.js

ex-8/
index8.js

ex-9/
index9.js

ex-10/
index10.js

## Exercícios

### Exercício 1
Escreva um programa que mostre na tela a mensagem: "Olá, mundo!".

### Exercício 2
Faça um programa que leia o nome de uma pessoa e dê boas-vindas. Exemplo: “Olá, Lucas!”.

### Exercício 3
Faça um programa que leia o nome do funcionário e seu salário e mostre uma mensagem como a do exemplo: O funcionário Lucas recebe R$2000,00 por mês.

### Exercício 4
Desenvolva um algoritmo que leia dois números inteiros e mostre o somatório entre eles.

### Exercício 5
Faça um programa que leia as duas notas de um aluno em uma matéria e mostre na tela a sua média na disciplina.

### Exercício 6
Faça um programa que leia um número inteiro e mostre o seu antecessor e seu sucessor.

### Exercício 7
Faça um algoritmo que leia quanto dinheiro uma pessoa tem na carteira (em R$) e mostre quantos dólares ela pode comprar. Considere US$1,00 = R$5,60.

### Exercício 8
Faça um algoritmo que leia a largura e altura de uma parede e mostre a área a ser pintada e a quantidade de tinta necessária para o serviço, sabendo que cada litro de tinta pinta uma área de 2 metros quadrados.

### Exercício 9
Crie um programa que leia o número de dias trabalhados em um mês e mostre o salário de um funcionário, sabendo que ele trabalha 8 horas por dia e ganha R$25 por hora trabalhada.

### Exercício 10
Faça um algoritmo que leia o salário de um funcionário, calcule e mostre o seu novo salário, com 15% de aumento.

## Como Executar os Exercícios
Navegue até a pasta do exercício desejado.
Abra o terminal na pasta do exercício.
Execute o comando node index.js para iniciar o programa.
Siga as instruções exibidas no terminal.
Exemplo de Código
Todos os exercícios seguem um formato semelhante ao exemplo abaixo:

const readline = require("readline"); // importa o módulo readline

## // cria uma interface de leitura para entrada e saída de dados
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

## // pedindo para que o usuário informe seu nome e captura o dado
rl.question("Escreva seu nome: ", (nome) => {
  console.log(`Olá, ${nome}!`);

  rl.close(); // fecha a interface após a captura do dado
});
## Contribuições
Sinta-se à vontade para contribuir com melhorias ou novas ideias para os exercícios. Para isso, faça um fork deste repositório, crie uma branch com suas alterações e envie um pull request.

# Licença
Este projeto está licenciado sob a Licença MIT. Veja o arquivo LICENSE para mais detalhes.
