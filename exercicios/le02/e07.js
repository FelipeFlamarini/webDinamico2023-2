// Números Primos: Crie um programa que determine se um número fornecido pelo
// usuário é primo ou não.

const prompt = require("prompt-sync")();

const n = Number(prompt("Digite um número para determinar se ele é primo: "));

let primo = true;

for (let i = 2; i < n; i++) {
    if (n % i == 0) primo = false;
}

if (primo) console.log(`${n} é primo`);
else console.log(`${n} não é primo`);
