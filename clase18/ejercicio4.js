/*
Pide al usuario que ingrese una lista de nombres separados por comas. Los nombres a ingresar deben ser Julian, Maria, Malena, Andrea, Pablo, Pedro.
    
Luego, escribe la función “transformarYAnalizarNombres”que realice las siguientes tareas:
1. Quite los espacios en blanco alrededor de cada nombre.
2. Verifique si existe el nombre "Juan".
3. Reemplace todos los nombres "María" por "Ana".
4. Encuentre el índice del nombre "Pedro".
5. Devuelva una cadena de nombres en orden alfabético separados por puntos. Investigar el método “.sort()” https://developer.mozilla.org/en- US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

*/
const prompt = require('prompt-sync')();
let search = "Julian"
let nombres = prompt("Ingrese los nombres separados por comas ");
let arrayName = nombres.split(",")
let newName = arrayName.map((nombre) => nombre.trim());
let encontrar = arrayName.includes(search);
let encontrar2 = nombres.indexOf("Julian")
let replaces = nombres.replace(/Maria/g, "Ana"); //String
let searchPedro = nombres.indexOf("Pedro");
let ordenar = arrayName.sort()


console.log(newName);
console.log(`El nombre Julian esta en ${encontrar}`);
console.log(`El nombre Julian esta en la pos ${encontrar2}`);
console.log(replaces);
console.log("La pos de pedro esta en " + searchPedro);
console.log(ordenar);