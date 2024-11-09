const prompt=require('prompt-sync')({sigint:true});

let nombre = prompt("¿Cuál es tu nombre? ")
let edad = prompt("¿Cuántos años tienes? ")
let peso = prompt("¿Cuánto pesas? ")

console.log(`hola ${nombre}, tu edad es ${edad} y tu peso ${peso}`);