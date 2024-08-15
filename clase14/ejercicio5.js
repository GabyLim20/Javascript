/*
Escribe un programa en JavaScript para contar cuántas veces el usuario menciona sus flores favoritas. Utiliza un array para almacenar las flores favoritas y realiza las siguientes acciones:
1. Inicializa un array vacío para almacenar las flores favoritas.
2. Pregunta al usuario por sus tres flores favoritas utilizando prompt y
agrega cada una al array (aquí usa un método de los vistos en Arrays)
3. Pregunta al usuario por una flor específica y verifica si está entre sus
favoritas (aquí usa un método de los vistos en Arrays)
4. Muestra por consola cuántas de las flores favoritas se mencionaron.
Pista: Se utiliza el método includes.
*/
const prompt = require('prompt-sync')();
let favoriteFlower = [];
let floresFavorita = () =>{
    for (let i= 0; i<3; i++){
        flor = prompt("¿Cuál es tu flor favorita? ");
        favoriteFlower.push(flor);
    }
    buscar = prompt("Dime una flor pa' buscar? ");
    if(favoriteFlower.includes(buscar)){
        console.log("La flor si esta incluida " );
    } else{
        console.log("La flor no esta incluida ");
    }
}
floresFavorita();




