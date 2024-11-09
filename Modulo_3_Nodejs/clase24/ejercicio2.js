/*
Crea un objeto en JavaScript que represente a un estudiante con las siguientes propiedades: nombre, edad, curso, notas (un array de números).
Convierte este objeto a una cadena JSON usando JSON.stringify().
• Muestra la cadena JSON en la consola.
• Luego, convierte la cadena JSON de nuevo a un objeto utilizando
JSON.parse() y muestra el objeto en la consola.
*/
let estudiante = {
    nombre : "Poche",
    edad: 19,
    curso: "Historia",
    notas: [9,8,6]
};
let jsonString = JSON.stringify(estudiante);
console.log("El Json es: ",jsonString);
let objeto = JSON.parse(jsonString);
console.log("El objecto es: ", objeto);


