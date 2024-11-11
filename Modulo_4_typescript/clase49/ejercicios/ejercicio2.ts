/*Define una interfaz para representar una persona con nombre, edad y correo
electrónico. Crea una función que imprima esta información */
interface Persona{
    nombre: string;
    edad: number;
    correo: string;
}
function imprimir(persona: Persona) {
    console.log(`Nombre: ${persona.nombre}`);
    console.log(`Edad: ${persona.edad}`);
    console.log(`Correo: ${persona.correo}`);  
}
export const personaEjemplo: Persona = {
    nombre: "Juan Pérez",
    edad: 30,
    correo: "juan.perez@example.com"
};

imprimir(personaEjemplo);