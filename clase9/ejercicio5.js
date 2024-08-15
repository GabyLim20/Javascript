const prompt=require('prompt-sync')({sigint:true});

let notas = [];
let cantidad = parseInt(prompt("¿Cuántas notas quieres agregar?"));

for(let i = 0; i<cantidad; i++){
    notas[notas.length] = prompt("Ingresa la nota: ")
}
console.log("Las notas ingresadas son: " + notas)

