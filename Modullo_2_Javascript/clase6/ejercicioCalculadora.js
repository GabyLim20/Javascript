// Calculadora
const prompt = require('prompt-sync')();


let firstNumber = parseFloat(prompt("Escribe el primer número "));
let secondNumber = parseFloat(prompt("Escribe el segundo número "));
let operation = prompt("Que función quieres\n 1- Suma \n 2- Resta\n 3-Multiplicación\n 4- División");
let suma = firstNumber + secondNumber;
let resta = firstNumber - secondNumber;
let multiplicación = firstNumber * secondNumber;
let división = firstNumber / secondNumber;
if(operation == 1){
    console.log(suma);
} else if(operation == 2){
    console.log(resta);
} else if(operation == 3){
    console.log(multiplicación);
} else{
    console.log(división);
}
