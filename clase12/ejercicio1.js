const prompt=require('prompt-sync')();

const calcularPrecioIva = (precio, iva) => precio + (precio*iva/100);

let precio = parseFloat(prompt("¿Cuál es el precio? "));
let iva = parseFloat(prompt("¿Cuál es el IVA? "));
let precioFinal = calcularPrecioIva(precio, iva);
console.log(`El precio final con IVA es: $${precioFinal}`)