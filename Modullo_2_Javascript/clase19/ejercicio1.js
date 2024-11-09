/*
Crear una función que pida un valor por parámetro y muestre los
10 números siguientes.
*/
const prompt = require('prompt-sync')();
function numbers(number) {
    let arrayNumber = [];
    for (let i = 1; i <= 10; i++) {
        arrayNumber.push(number + i);
    }
    return arrayNumber;
}

let numero = parseInt(prompt("Dame un número "));
console.log(numbers(numero));
