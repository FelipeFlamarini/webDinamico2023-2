// Conta Palavras em uma String: Escreva um programa que conte quantas palavras
// existem em uma frase fornecida pelo usuário.

const prompt = require('prompt-sync')({sigint: false});

console.log(`Contando as palavras de uma frase`)
const frase = String(prompt(`Digite uma frase qualquer: `));

const words = frase.split(' ')

console.log(`A frase tem ${words.length} palavras`)