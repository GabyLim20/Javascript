/* 
Solicita al usuario la cantidad de productos comprados y el precio unitario.
Usa una función flecha para calcular el total con descuento según la cantidad.
*/
const prompt=require('prompt-sync')();

// Función 

const calcularTotal = (cantidad, precio ) => (cantidad * precio)- descuento ;

let precio = parseFloat(prompt("¿Cuál es el precio? "));
let cantidad = parseFloat(prompt("¿Cuál es la cantidad? "));
let descuento = parseFloat(prompt("¿Cuál es el descuento? "))
let precioFinal = calcularTotal(precio, cantidad);

console.log(`El precio final con descuento es: $${precioFinal}`)