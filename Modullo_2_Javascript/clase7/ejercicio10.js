const prompt=require('prompt-sync')({sigint:true});

let precio = parseFloat(prompt("¿Cuál es el precio del producto? "));
let descuento = parseFloat(prompt("¿Cuál es el % de descuento que te ofrecen? "));
let descuentoFinal = precio * (descuento / 100);
let precioFinal = precio - descuentoFinal
console.log("El producto ya con el descuento es de: " + precioFinal);