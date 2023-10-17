// Tabuada: Escreva um programa que exiba a tabuada de um número fornecido pelo
// usuário.

const prompt = require("prompt-sync")();

const n = Number(prompt("Digite um número para ver a sua tabuada: "));

for (let i = 1; i <= 10; i++) {
    console.log(`${n} x ${i} = ${n * i}`);
}