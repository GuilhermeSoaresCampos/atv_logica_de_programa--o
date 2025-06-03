/*7- Faça um programa para calcular n! (Fatorial de
n), sendo que o valor inteiro de n é fornecido pelo
usuário. utilize laço de repetição for.
Nome: Guilherme Henrique Soares Campos
*/
const teclado = require("prompt-sync")(); 
let n = Number(teclado("Digite um número inteiro para calcular o fatorial: "));
let fatorial: number = 1;

for (let z = 1; z <= n; z++){
fatorial *= z;

}

console.log(`O fatorial de ${n} é ${fatorial}`);
