/*
Solicita al usuario el nombre de su mascota y si está vacunada. 
Usa una función flecha para verificar y mostrar su estado de vacunación.
*/
const prompt = require('prompt-sync')();

const verificarStatus = (nombre, vacuna) => {
    let statusVacuna;
    if(vacuna === "Si"){
        statusVacuna = `El nombre de tu perrito es ${nombre} y si tiene su vacuna`;
    } else if(vacuna === "No"){
        statusVacuna = `El nombre de tu perrito es ${nombre} y no tiene su vacuna`;
    }  else{
        statusVacuna = `Invalido`;
    }
    return statusVacuna;
}
let name = prompt("¿Cuál es el nombre de tu mascota? ");
let vacuna = prompt("¿Esta vacunado? ");

let resultadoTotal = verificarStatus(name,vacuna);
console.log(resultadoTotal)

