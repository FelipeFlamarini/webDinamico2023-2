// Fatorial: Crie um programa que calcule o fatorial de um número fornecido pelo usuário.

const prompt = require("prompt-sync")();

const n = Number(prompt("Digite um número para calcular o fatorial: "));
let fatorial = 1;
for (i = fatorial; i <= n; i++) {
    fatorial *= i;
}

console.log(`O fatorial de ${n} é ${fatorial}`);