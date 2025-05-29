/*5- Faça um programa que dê entrada manual de 10 números
armazene em um vetor e ordene esses 10 números crescente,
fazer uso do laço de repetição for.
nome: Guilherme Henrique Soares Campos
*/
const teclado = require("prompt-sync")();
var numeros: number[] = []; 
var tamanhoVetor = 10; 


for (var i = 0; i < tamanhoVetor; i++) {
    var numero = Number(teclado("Digite o " + (i + 1) + "º número:"));
    if (!(numero !== numero)) { 
        numeros[i] = numero;
    } else {
        console.log("Por favor, insira um número válido.");
        i--; 
    }
}


for (var i = 0; i < tamanhoVetor; i++) {
    for (var j = 0; j < tamanhoVetor - 1; j++) {
        if (numeros[j] > numeros[j + 1]) {
            
            var temp = numeros[j];
            numeros[j] = numeros[j + 1];
            numeros[j + 1] = temp;
        }
    }
}


console.log("Números ordenados em ordem crescente:");
for (var i = 0; i < tamanhoVetor; i++) {
    console.log(numeros[i]);
}