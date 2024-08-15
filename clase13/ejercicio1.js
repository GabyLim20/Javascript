/*
Solicita al usuario un monto en dólares y una tasa de cambio a pesos. 
Usa una función flecha para convertir el monto a pesos.
*/
const prompt=require('prompt-sync')();

const calcularDolar = (dolar, precio) => dolar * precio

let dolar = parseFloat(prompt("¿Cuántos dolares tienes? "));
let precio = parseFloat(prompt("¿Cuánto vale el dolar? "));


let precioFinal = calcularDolar(dolar,precio);
console.log(`El precio que te podemos dar: $${precioFinal}`)
