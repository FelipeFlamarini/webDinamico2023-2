// Maior e Menor Valor em um Vetor: Escreva um programa que encontre o maior e o
// menor valor em um vetor de números

const prompt = require('prompt-sync')();

const vetor = [];

while (true) {
    const n = Number(prompt("Digite um número para adicionar ao vetor. Digite 0 para parar: "));
    if (n == 0) break;
    else vetor.push(n);
}


let maior = vetor[0];
let menor = vetor[0];

for (i = 0; i < vetor.length; i++) {
    if (vetor[i] > maior) maior = vetor[i];
    else if (vetor[i] < menor) menor = vetor[i];
}

console.log(`O vetor é ${vetor}`)
console.log(`O maior valor é ${maior}`)
console.log(`O menor valor é ${menor}`)