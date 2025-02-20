   // Faça um algoritmo que pergunte a distância que um passageiro deseja
   //  percorrer em Km. Calcule o preço da passagem, cobrando R$0.50 por Km para
   //  viagens até 200Km e R$0.45
   //  para viagens mais longas.
   
   
   const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});


rl.question("Digite a distância da viagem em Km: ", function(distancia) {
    let preco = parseFloat(distancia) <= 200 ? distancia * 0.50 : distancia * 0.45;
    
    console.log(`O preço da passagem é R$ ${preco.toFixed(2)}.`);
    rl.close();
});
