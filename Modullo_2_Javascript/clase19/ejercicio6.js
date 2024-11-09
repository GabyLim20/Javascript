//Crear una función que reciba un string y luego imprimir la cantidad de vocales que se encuentran en dicha frase.
//Ejercicio6
const prompt = require('prompt-sync')();

let frase = prompt('Dame la frase para contar las vocales: ');
let numeroVocales = frase.match(/[aeiou]/gi).length;

console.log(numeroVocales);