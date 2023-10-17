// Maior Divisor Comum (MDC): Desenvolva um programa que encontre o MDC de dois
// números fornecidos pelo usuário.

const prompt = require('prompt-sync')({sigint: false});

function encontrarDivisores(n) {
    const divisores = [];
    for (i = 1; i <= n; i++) {
        if (n % i == 0) {
            divisores.push(i)
        }
    }
    return divisores
}

console.log(`Calculando o MDC de dois números`)
const n1 = Number(prompt(`Digite o primeiro número: `));
const n2 = Number(prompt(`Digite o segundo número: `));

let n1Divisores = encontrarDivisores(n1);
let n2Divisores = encontrarDivisores(n2);
let MDC = 1;

n1Divisores.forEach(n1Divisor => {
    n2Divisores.forEach(n2Divisor => {
        if ((n1Divisor == n2Divisor) && (n1Divisor > MDC)) MDC = n1Divisor;
    });
});

console.log(`O MDC de ${n1} e ${n2} é ${MDC}`);
