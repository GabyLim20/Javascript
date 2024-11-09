const prompt = require('prompt-sync')({sigint:true});

let nombre = prompt("¿Cuál es tú nombre? ") ;
console.log(`El nombre ingresado es: ${nombre}`);

if(nombre === "Lorena"){
    console.log("El nombre es igual")
} else{
    console.log("Los nombres no son iguales")
}

/**
 const prompt = require('prompt-sync')({sigint:true});
let nombre = prompt("¿Cuál es tú nombre? ") === "Lorena";
console.log(`El nombre ingresado es: ${nombre}`);
 */
