/*4 – Faça um programa que dê entrada manual de 10 números
armazene em um vetor, em seguida inverter a ordem de
armazenamento em outro vetor, utilize laços de repetição para
fazer essa atividade.
Nome: Guilherme Henrique Soares Campos 
*/
let teclado = require('prompt-sync')();

let meuArray: number[] = [];
let i: number;

for (i = 0; i <= 9; i = i + 1) {
    meuArray[i] = parseInt(teclado(`Digite o ${i + 1}°: `));
}

let invertido: number[] = [];
for (i = 0; i <= 9; i = i + 1) {
    invertido[i] = meuArray[9 - i];
}


console.log("Vetor original:", meuArray);
console.log("Vetor invertido:", invertido);