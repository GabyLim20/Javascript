/*
Solicita al usuario cinco calificaciones y usa una función flecha para calcular
el promedio
*/
const prompt=require('prompt-sync')();
let suma = 0;
let calificacion = [];
const promedio = (calificacion) => {
    for(let i = 0; i<5; i++){
        calificacion = parseFloat(prompt("Dame tu calificación: "));
        suma += calificacion;
    }
    let resultado = suma / 5;
    return  resultado;
}

let resultadoTotal = promedio(calificacion);

console.log(`El promedio es ${resultadoTotal} `)