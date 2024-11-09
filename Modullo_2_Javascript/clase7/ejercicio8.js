const prompt=require('prompt-sync')({sigint:true});

let celsius = parseFloat(prompt("¿Cuál es la temperatura? "));
let fahrenheit = celsius * 9 / 5 + 32;
console.log(`La temperatura en fahrenheit es: ${fahrenheit}`);
