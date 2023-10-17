// Soma de Números Pares: Escreva um programa que calcule a soma de todos os números
// pares de 1 a N, onde N é um número fornecido pelo usuário.

const prompt = require('prompt-sync')();

let n = Number(prompt('Digite um número: '));
let soma = 0;

for (let i = 0; i <= n; i++) {
    if (i % 2 == 0) {
        soma += i;
    }
}

console.log(`A soma dos números pares de 1 a ${n} é ${soma}.`);