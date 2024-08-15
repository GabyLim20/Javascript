/*
Escribe un programa que solicite al usuario ingresar 5 paises y los almacene en un array. Luego, imprime en consola todos los paises de manera alfabetica.
Importante: Este ejercicio puede ser resulto con el método sort(). Si desean investigar y utilizarlo es aceptable.
*/
const prompt = require('prompt-sync')();

let pais = [];
for(let i = 0; i < 5; i++){
    pais.push(prompt("Dame el país "))
}
console.log(pais.sort());
