/*
Ejercicio 7: Uso de Arrays y Condicionales
Crea un programa que solicite al usuario ingresar 5 nombres y los almacene en un array.
 Luego, solicita al usuario ingresar un nombre y verifica si ese nombre se encuentra en el array. 
 (Pueden desglosar en pasos el código si eso les facilita su desarrollo)
*/
const prompt=require('prompt-sync')({sigint:true});

let arraynames = [];
for(let i=0; i<5; i++){
    let names = prompt(`Ingresa el nombre: ${i+1} `);
    arraynames.push(names)
}
console.log("Nombre ingresado " + arraynames);
let searchName = prompt("Ingresa el nombre a verificar: ");
if(arraynames.includes(searchName)){
    console.log(`El nombre ${searchName} si esta en la lista`);
} else{
    console.log(`El nombre ${searchName} no esta en la lista`);
}

//.push para agregar a la lista
