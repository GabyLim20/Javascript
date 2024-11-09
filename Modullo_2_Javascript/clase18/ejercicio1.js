/*
Crea un objeto literal que represente un estudiante. El mismo debe tener
las siguientes propiedades: nombre, edad y un array de notas (con 5
notas).
Luego, escribe la función “procesarEstudiante” que tendrá como objetivo
realizar las siguientes tareas:
1. Agregar una nueva nota al array de notas.
2. Eliminar la primera nota del array.
3. Calcular el promedio de las notas restantes.
4. Convertir el nombre del estudiante a mayúsculas. Para esto
investiga sobre el método “toUpperCase()”
https://www.w3schools.com/jsref/jsref_touppercase.asp
5. Devuelver un objeto con el nombre en mayúsculas y el promedio de
las notas
*/

let estudiante = {
    nombre: "Jose",
    edad: 20,
    notas: [10, 8, 9, 7,5]
}
let promedio = 0;

let procesarEstudiante = (nota) =>{
    let suma = 0;
    estudiante.notas.push(nota);
    estudiante.notas.shift(nota);
    for(let i=0; i<estudiante.notas.length; i++){
        suma += estudiante.notas[i];
    }
    console.log(`La suma de tus notas es: ${suma}`);
    promedio = suma/estudiante.notas.length
    estudiante.nombre = estudiante.nombre.toUpperCase();
    return estudiante.notas;


}
console.log(procesarEstudiante(8));
console.log(`El promedio de tus notas es: ${promedio}`);
console.log(estudiante.nombre);