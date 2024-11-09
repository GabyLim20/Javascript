 //Crear una función que muestre todos los números de la secuencia de Fibonacci hasta el valor ingresado por parámetro. Investigar sobre “la secuencia de Fibonacci”.
 //Ejercicio5
const prompt = require('prompt-sync')();
let number = parseInt(prompt('Ingresa el numero: '));
let n1 = 0;
let n2 = 1; 
let nextTerm;

console.log('La serie sería:');

for (let i = 1; i <= number; i++) {
    console.log(n1);
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
}