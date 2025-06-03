/*5- Faça um programa que dê entrada manual de 10 números
armazene em um vetor e ordene esses 10 números crescente,
fazer uso do laço de repetição for.
nome: Guilherme Henrique Soares Campos
*/

let teclado = require("prompt-sync")();
let numeros: number[] = [];
let temporario: number = 0;
for (let x = 0; x <= 9; x++) {
    numeros[x] = parseInt(teclado(`Digite o número do índice ${x} do Array:`));

}

for (let z = 0; z < 10; z++) {
    for (let y = z + 1; y < 10; y++) {
        if (numeros[z] > numeros[y]) { // para ser decrescente precisa somente trocar o sinal de menor para maior
            temporario = numeros[z];
            numeros[z] = numeros[y];
            numeros[y] = temporario;
        }
    }



}

console.log(numeros); 
