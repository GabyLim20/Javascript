// Mutabilidad en Objetos
let persona = {
    nombre : "Gabs",
    edad : 23
}
// cambiar una propiedad del objeto
persona.edad = 18;
console.log(persona); //Imprime { nombre: 'Gabs', edad: 18 }
//Agregar una nueva propiedad
persona.direccion = "Galeana";
console.log(persona);

//Mutabilidad en arrays
let numero = [ 1,2,3,4,5]
//Cambiar el elemento del array
numero[0] = 9;
console.log(numero);
//Agregar un nuevo elemento al array
numero.push(10);
console.log(numero);
//Mutabilidad en funciones
let saludar = function(nombre){
    console.log(`Hola, ${nombre}`);
};
saludar("Gabs")
// Reasignación de la función para cambiar su comportamiento
saludar = function(nombre){
    console.log(`Hola ${nombre}. ¿Cómo estas?`)
}
saludar("Gabs")
