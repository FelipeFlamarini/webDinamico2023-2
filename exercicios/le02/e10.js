// Multiplicação de Matrizes: Implemente um programa que realize a multiplicação de
// duas matrizes quadradas fornecidas pelo usuário e exiba o resultado.

const prompt = require('prompt-sync')();

function multiplicarMatrizes(m1, m2) {
    //checando se são compatíveis para multiplicar (número de colunas de m1 == número de linhas de m2)
    if (m1.length !== m2[0].length) return false;
    const result = [];

    for (i = 0; i < m1.length; i++) { // linha de m1
        result[i] = [];
        for (j = 0; j < m2[0].length; j++) { // coluna de m2
            let sum = 0;
            for (k = 0; k < m1[0].length; k++) {
                // console.log(`i:${i}, k:${k}`)
                // console.log(m1[i][k] * m2[k][j])
                sum += m1[i][k] * m2[k][j];
            }
            result[i][j] = sum;
        }
    }
    return result;
}

const n = Number(prompt(`Digite a ordem das matrizes quadrada: `));
const matriz1 = [];
const matriz2 = [];

// número de linhas == matriz1.length
// número de colunas == matriz1[0].length

console.log(`Criando a primeira matriz quadrada`);
for (i = 0; i < n; i++) {
    matriz1[i] = [];
    for (j = 0; j < n; j++) {
        const x = Number(prompt(`Digite o elemento de posição (${i + 1}, ${j + 1}): `));
        matriz1[i].push(x);
    }
}

console.log(`Criando a segunda matriz quadrada`);
for (i = 0; i < n; i++) {
    matriz2[i] = [];
    for (j = 0; j < n; j++) {
        const x = Number(prompt(`Digite o elemento de posição (${i + 1}, ${j + 1}): `));
        matriz2[i].push(x);
    }
}

const matriz3 = multiplicarMatrizes(matriz1, matriz2);

console.log(`A primeira matriz é`);
matriz1.forEach(line => {
    console.log(line);
});

console.log(`A segunda matriz é`);
matriz2.forEach(line => {
    console.log(line);
});


console.log(`A matriz resultante é`);
matriz3.forEach(line => {
    console.log(line);
});

