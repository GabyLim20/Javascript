// backstick ` para poder usar en el mismo2 ${}
const prompt = require('prompt-sync')();

let firstNumber = parseFloat(prompt("Escribe un número "));
if(isNaN(firstNumber)){
    console.log("Escribe un número valido");
    firstNumber = parseFloat(prompt("Escribe un número "));
}
let secondNumber = parseFloat(prompt("Escribe el segundo número "));
if(isNaN(secondNumber)){
    console.log("Escribe un número valido");
    secondNumber = parseFloat(prompt("Escribe el segundo número "));
}
let thirdNumber = parseFloat(prompt("Escribe el tercer número "));
if(isNaN(thirdNumber)){
    console.log("Escribe un número valido ");
    thirdNumber = parseFloat(prompt("Escribe el tercer número "));
}

if(firstNumber > secondNumber && firstNumber > thirdNumber){
    console.log(`El primer número ${firstNumber} es mayor`);
} else if(secondNumber > firstNumber && secondNumber > thirdNumber){
    console.log("El segundo número ", secondNumber, "es mayor ");
} else{
    console.log(`El tercer número ${thirdNumber} es mayor`);
}