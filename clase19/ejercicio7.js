//Realizar una función que, dada una lista, devuelva una nueva lista cuyo contenido sea igual a la original pero invertida.
// Ejercicio 7
const prompt = require("prompt-sync")()
let frase = prompt('Dame la frase para invertirla: ');
function reverseString(str) {
  let arrStr = str.split("");

  console.log(arrStr.reverse().join(""));

  return arrStr.reverse().join("");
}
reverseString(frase)
