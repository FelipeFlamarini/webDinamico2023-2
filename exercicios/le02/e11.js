// Média de Notas: Crie um programa que calcule a média de notas de um estudante. O
// usuário deve fornecer as notas e a quantidade de notas.

const prompt = require('prompt-sync')({sigint: false});

const notas = [];
while (true) {
    const n = Number(prompt("Digite a nota. Digite -1 ou CTRL + C para parar: "));
    if (n == 0) break;
    else notas.push(n);
}

let sum = 0;
notas.forEach(nota => {
    sum += nota
})

console.log(`As notas são ${notas}`)
console.log(`A média do aluno é ${sum / notas.length}`)