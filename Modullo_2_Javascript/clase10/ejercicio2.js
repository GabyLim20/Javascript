/* 
Usando la estructura switch, crea un programa en el que si un usuario ingresa "casa", "perro", "pelota", "árbol" o "genio", nos devuelva la misma palabra traducida al idioma inglés.
En caso de que la palabra sea distinta a la esperada, mostrarle un mensaje que le informe que la palabra ingresada es incorrecta.

*/
const prompt=require('prompt-sync')({sigint:true});
let word = prompt("Escribe una palabra: ");
switch(word){
    case "casa":
        console.log("House");
        break;
    case "perro":
        console.log("dog");
        break;
    case "pelota":
        console.log("ball");
        break;
    case "arbol":
        console.log("tree");
        break;
    case "genio":
        console.log("Genious");
        break;
    default:
        console.log("Escribe algo válido");

}