//Crea una función que le pasamos el radio de un circulo y nos devuelve la circunferencia.
const prompt = require('prompt-sync')();

function circunferencia(radio) {
    let pi = 2 * Math.PI * radio;
    return pi;
}

let radio = parseFloat(prompt('Ingresa el radio del círculo: '));

console.log(circunferencia(radio))