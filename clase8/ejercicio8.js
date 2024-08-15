const prompt = require('prompt-sync')({sigint:true});
let lado1 = parseInt(prompt("Ingresa el lado 1: "));
let lado2 = parseInt(prompt("Ingresa el lado 2: "));
let lado3 = parseInt(prompt("Ingresa el lado 3: "));

if(lado1 == lado2 && lado1 == lado3){
    console.log(`El triangulo es equilatero`)
} else if(lado1 === lado2 && lado1 != lado3){
    console.log(`El triangulo es isoceles`)
} else if(lado1 === lado3 && lado1 != lado2){
    console.log(`El triangulo es isoceles`)
} else if(lado2 === lado3 && lado2 != lado1){
    console.log(`El triangulo es isoceles`)
}else{
    console.log("el triangulo es escaleno")
}