const prompt = require('prompt-sync')();

//Crear una función que recibe un string en minúsculas, lo convierta a mayúsculas y lo retorne.
let oracion = prompt('Ingresa la oración: ');
let convertidor = (mayus) =>{
    mayus = mayus.toUpperCase();
    console.log(mayus);
}

convertidor(oracion);