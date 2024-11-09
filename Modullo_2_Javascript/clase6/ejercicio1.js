const prompt = require('prompt-sync')();

//1. Pedir al usuario el precio original del producto
let precioOriginal = parseFloat(prompt('Ingresa el precio original del producto: '));

//2. Pedir al usuario el porcentaje de descuento
let porcentajeDescuento = prompt('Ingresa el porcentaje de descuento: ');

//3. Calcular el descuesto
let descuento = (precioOriginal * porcentajeDescuento) / 100;

//4. Calcular el precio final
let precioFinal = (precioOriginal - descuento)

console.log("El precio final después del descuento es: ", precioFinal)
console.log('Precio ${precioFinal}')