// Soma de Dígitos: Desenvolva um programa que calcule a soma dos dígitos de um
// número fornecido pelo usuário.

const prompt = require('prompt-sync')({sigint: false});

const n = Number(prompt(`Digite um número: `))

const digits = String(n).split('')
let sum = 0;
digits.forEach(digit => {
    sum += Number(digit);
});
console.log(`A soma dos dígitos de ${n} é ${sum}`);