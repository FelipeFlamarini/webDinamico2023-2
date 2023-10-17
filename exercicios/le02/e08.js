// Inversão de Vetor: Desenvolva um programa que inverta a ordem dos elementos em
// um vetor.

const prompt = require('prompt-sync')();

const vetor1 = [];
const vetor2 = [];

while (true) {
    const n = Number(prompt("Digite um número para adicionar ao vetor. Digite 0 para parar: "));
    if (n == 0) break;
    else vetor1.push(n);
}

for (i = vetor1.length - 1; i >= 0; i--) {
    vetor2.push(vetor1[i]);
}

console.log(`O vetor é ${vetor1}`);
console.log(`O vetor invertido é ${vetor2}`);