/*7- Faça um programa para calcular n! (Fatorial de
n), sendo que o valor inteiro de n é fornecido pelo
usuário. utilize laço de repetição for.
Nome: Guilherme Henrique Soares Campos
*/
const teclado = require("prompt-sync")(); 
let n = Number(teclado("Digite um número inteiro para calcular o fatorial: "));

if (n >= 0) { 
    var fatorial = 1; 
    for (var i = 1; i <= n; i++) {
        fatorial = fatorial * i; 
    }

    console.log("O fatorial de " + n + " é: " + fatorial);
} else {
    console.log("Por favor, insira um número inteiro não negativo.");
}
