const prompt = require('prompt-sync')({sigint:true});

const pi = 3.14159;
let radio = parseFloat(prompt("Dime el radio: "));

let area = pi * (radio*radio)
let perimetro = (2 * pi) * radio
console.log(`El area del circulo es ${area}\nEl perímetro es: ${perimetro}`)