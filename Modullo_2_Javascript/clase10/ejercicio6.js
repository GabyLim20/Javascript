/*
Ejercicio 6: Bucle For – Array
Escribe un programa en JavaScript que clasifique diferentes animales en tres categorías:
"mamífero", "ave" o "reptil". Se te proporciona un array llamado animales que contiene 
nombres de diferentes animales. Utiliza un bucle for y operadores ternarios para 
crear un nuevo array llamado clasificacion que contenga la clasificación de cada animal según su tipo.

*/

let animales = ["perro", "gato", "loro","serpiente","elefante","aguila"];
let clasificacion = [];

for(i=0; i < animales.length; i++){
    let tipo =
        (animales[i] === "perro" || animales[i] === "gato" || animales[i] === "elefante")? "mamifero":
        (animales[i] === "loro" || animales[i] === "aguila" )? "ave":
        (animales[i] === "serpiente" )? "reptil":
        "desconocido"

        clasificacion.push(tipo)  
}
console.log(clasificacion);
