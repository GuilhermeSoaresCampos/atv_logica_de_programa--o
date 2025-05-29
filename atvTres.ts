/*3- Faça um programa que dê entrada com 10 números
armazene em um vetor, e verifique qual é o maior
número e mostre no console.
Nome: Guilherme Henrique Soares Campos
*/


let teclado = require (`prompt-sync`)();


let meuArray: number [] = [];

for (let cont = 0; cont <=9; cont++){
    meuArray[cont] = parseInt(teclado(`Digite o ${cont + 1}°:`))
}

let maior: number = meuArray[0];

for (let i = 0; i < 19; i++){
    if (maior < meuArray[i]){
        maior = meuArray[i];
    }
}
console.log(meuArray);
console.log(`O maior número é ${maior}`);
