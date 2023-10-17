// Média de Valores em um Vetor: Crie um programa que calcule a média dos valores em
// um vetor de números

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

const media = soma / vetor.length;

console.log(`O vetor é ${vetor}`)
console.log(`A média dos números no vetor é ${media}`);