// Contagem de Números Pares e Ímpares: Desenvolva um programa que conte e exiba
// quantos números pares e ímpares existem em um vetor de números.

const prompt = require("prompt-sync")();

const vetor = [];
while (true) {
    const n = Number(prompt("Digite um número para adicionar ao vetor. Digite 0 para parar: "));
    if (n == 0) {
        break;
    }
    else {
        vetor.push(n);
    }
}

let pares = 0;
let impares = 0;
for (let i = 0; i < vetor.length; i++) {
    if (vetor[i] % 2 == 0) {
        pares++;
    } else {
        impares++;
    }
}

console.log(`O vetor é ${vetor}`)
console.log(`O vetor possui ${pares} números pares e ${impares} números ímpares.`);