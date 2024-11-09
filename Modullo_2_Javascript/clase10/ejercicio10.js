/*
Implementa un programa que permita al usuario registrar la edad de mascotas en una veterinaria hasta que decida dejar de agregar. Cuando el usuario no agregue mas edades, imprimir en consola las mascotas agregadas anteriormente y sus respectivas edades.
*/
const prompt = require('prompt-sync')();
let mascotas = [];
let continuar;

do{
    let nombreMascota = prompt("¿Cuál es el nombre de tu mascota? ");
    let edadMascota = prompt("¿Cuál es la edad de tu mascota? ");
    
    mascotas.push({ nombre: nombreMascota, edad: edadMascota });
    continuar = prompt("¿Quieres agregar otra mascota? (si/no): ");

} while(continuar === "si")

    for (let i = 0; i < mascotas.length; i++) {
        console.log(`Nombre: ${mascotas[i].nombre}, Edad: ${mascotas[i].edad}`);
    }