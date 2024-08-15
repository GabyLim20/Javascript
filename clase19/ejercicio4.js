//Dado un numero entero positivo, mostrar su factorial. Pista: El factorial de un número se obtiene multiplicando todos los números enteros positivos que hay entre el 1 y ese número.
//Ejercicio 4
const prompt = require("prompt-sync")();
 let numero = parseInt(prompt("Ingrese un numero:  "));
let factorial = 0;
 let calcularFactorial=(numero)=>{
     let i = numero
     while(i>1){
         i--;
        factorial = numero*=i
     }
     console.log("El factorial es " + factorial)
 }
 calcularFactorial(numero);