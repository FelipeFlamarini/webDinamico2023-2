// Fibonacci: Implemente um programa que gere a sequência de Fibonacci até o N-ésimo
// termo, onde N é fornecido pelo usuário.

const prompt = require('prompt-sync')({sigint: false});

const n = Number(prompt(`Digite o N-ésimo termo da sequência de Fibonacci desejado: `));

const fibonacci = [1, 1];

for (i = 1; i < n - 1; i++) {
    fibonacci.push(fibonacci[i] + fibonacci[i - 1]);
}

console.log(`${fibonacci}`)