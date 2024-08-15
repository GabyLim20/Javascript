//Inmutabilidad en Objetos
//Para mantener la inmutabilidad en obj, se puede usar el operador de propagación 
//(...)
// Para crear copias superficiales del objeto original
let persona = {
    nombre: "Jose",
    edad: 19
}
//Crear una nueva copia del obj con un cambio
let personaNueva ={...persona, edad: 24}
console.log(persona);
console.log(personaNueva);
// Inmutabilidad en array
//Se puede usar metodo concat, slice u operador propagación(...) para crear nuevas copias del array original
let numeros = [1,2,3,4,5]
let newNumbrer = [...numeros, 6]
console.log(numeros);
console.log(newNumbrer);
// Inmutabilidad en funciones
//En lugar de modificar una funcion existente, crearemos una nueva función con los cambios necesarios
//Función original
function saludar(nombre){
    return`Hola ${nombre}!`;
}
//Modificar la función original(no inmutable)
function saludarFormal(nombre){
    return `Buenos dias, ${nombre}.`
}
console.log(saludar("Jose"));
console.log(saludarFormal("Guadalupe"));
//Crear una nueva función con los cambios (inmutabilidad)
const saludarEnIngles = (nombre) => `Hello, ${nombre}!`;
console.log(saludarEnIngles("Martha"));