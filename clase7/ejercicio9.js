const prompt=require('prompt-sync')({sigint:true});

let peso = parseFloat(prompt("¿Cuál es tu peso? "));
let altura = parseFloat(prompt("¿Cuál es tu estatura? "));
let imc = peso / (altura * altura);
console.log("Tu IMC es: " + imc);