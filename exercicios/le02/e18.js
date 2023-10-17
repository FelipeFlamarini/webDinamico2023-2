// Contagem de Vogais e Consoantes: Escreva um programa que conte quantas vogais e
// consoantes há em uma string fornecida pelo usuário.

const prompt = require('prompt-sync')({sigint: false});

const vowels = ["a", "e", "i", "o", "u"];
const consonants = ["b", 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z']

let vowelsCount = 0;
let consonantsCount = 0;

console.log(`Contando vogais e consoantes de uma frase`);
const phrase = String(prompt(`Digite uma frase: `));

const phraseSplit = phrase.split('');

phraseSplit.forEach(letter => {
    if (vowels.includes(letter)) vowelsCount++;
    else if (consonants.includes(letter)) consonantsCount++;
});

console.log(`A frase possui ${vowelsCount} vogais e ${consonantsCount} consoantes`);