// Números Perfeitos: Crie um programa que determine se um número fornecido pelo
// usuário é perfeito ou não. Um número perfeito é aquele cuja soma de seus divisores
// próprios é igual ao próprio número (por exemplo, 28).

const prompt = require('prompt-sync')({sigint: false});

function encontrarDivisoresProprios(n) {
    const divisores = [];
    for (i = 1; i < n; i++) {
        if (n % i == 0) {
            divisores.push(i)
        }
    }
    return divisores
}

function sumArray(array) {
    let sum = 0;
    array.forEach(n => {
        sum += n;
    });
    return sum
}

console.log(`Verificando se um número é perfeito`)
const n = Number(prompt(`Digite um número: `));

const divisores = encontrarDivisoresProprios(n);
const sum = sumArray(divisores);
// console.log(`${divisores}`);
// console.log(`${sum}`)

if (sum == n) console.log(`O número ${n} é perfeito`);
else console.log(`O número ${n} não é perfeito`);