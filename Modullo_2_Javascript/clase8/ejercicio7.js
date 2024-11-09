const prompt=require('prompt-sync')({sigint:true});

let kilogramos = parseFloat(prompt("¿Cuál es el peso? "));
let libra = kilogramos * 2.20462;

console.log(`Tu peso en libra es: ${libra}`);
