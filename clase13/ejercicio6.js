/*
Hacer un programa que calcule la suma de los N primeros números naturales, dónde N es el número límite ingresado por teclado.
*/
const prompt=require('prompt-sync')();
let suma = 0;


const verifyNumber = (number) =>{
    for (let i = 0; i<= number; i++){
        suma += i
    }
    return suma
}
let limit = parseInt(prompt("¿Cuál es el limite de número que quieres sumar?"));
let result = verifyNumber(limit);
console.log(`La suma es ${result}`)
