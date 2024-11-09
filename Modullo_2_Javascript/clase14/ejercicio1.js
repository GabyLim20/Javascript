/* Para este ejercicio deberán definir un objeto literal “deportista”, con los
siguientes atributos: nombre, energía, experiencia.
Ademas queremos poder pedirle al deportista que entrene. Para esto,
nuestro trabajo va a ser realizar una función “entrenarHoras.”
La función entrenarHoras tiene las siguientes tres características:
✓ Recibe por parámetro la cantidad de horas.
✓ Resta a su energía (this.energia) la cantidad de horas x 5.
✓ Incrementa su experiencia (this.experiencia) la cantidad de horas x 2.
Una vez definida la función, podemos ejecutar el código y ver cómo va
variando la energía y experiencia del deportista por consola. */
const prompt = require('prompt-sync')();

let deportista = {
    nombre : "Leonel",
    energía: 95,
    experiencia: 100,
    entrenarHoras: function(cantidadDeHora){
        this.energía -= (cantidadDeHora * 5);
        this.experiencia += (cantidadDeHora *2);
        return `Con el entrenamiento bajo de energía ${this.energía} y aumentó de experiencia ${this.experiencia}`
    }
}
let hora = parseInt(prompt("¿Cuántas horas ?"))
console.log(deportista.entrenarHoras(hora))