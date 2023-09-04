// Soma dos Elementos de um Vetor: Escreva um programa que calcule a soma de todos
// os elementos em um vetor de números.

const prompt = require("prompt-sync")();

const vetor = []

while (true) {
    const n = Number(prompt("Digite um número para adicionar ao vetor. Digite 0 para parar: "));
    if (n == 0) {
        break;
    }
    else {
        vetor.push(n);
    }
}

let soma = 0;

for (let i = 0; i < vetor.length; i++) {
    soma += vetor[i];
}

console.log(`O vetor é ${vetor}`)
console.log(`A soma dos números no vetor é ${soma}`);