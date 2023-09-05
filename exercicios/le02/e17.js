// Média Ponderada: Crie um programa que calcule a média ponderada de um conjunto
// de valores, onde o usuário fornece os valores e seus respectivos pesos.

const prompt = require('prompt-sync')({sigint: false});

function weightedAverage(nums, weights) {
    let sum = 0;
    let weight = 0;

    nums.forEach((num, index) => {
        // console.log(num);
        // console.log(index);
        sum += num * weights[index];
    });

    weights.forEach(w => {
        weight += w;
    });

    return sum/weight;
} 

const nums = [];
const weights = []

console.log(`Calculando média ponderada`);
const n = Number(prompt(`Digite quantos valores compõe a média: `))

for (i = 0; i < n; i++) {
    const n = Number(prompt(`Digite o valor: `))
    const w = Number(prompt(`Digite o peso do valor ${n}: `))
    nums.push(n);
    weights.push(w);
}

console.log(`Os números são ${nums}`);
console.log(`Os pesos são ${weights}`);
console.log(`A média ponderada é ${weightedAverage(nums, weights)}`)