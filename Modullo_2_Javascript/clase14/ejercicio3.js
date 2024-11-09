/*
Creá la función backEnd() que recibirá 2 números como parámetros. La función deberá imprimir por pantalla los números del 1 al 100, pero teniendo en cuenta los siguientes criterios:
✓ Si el número a imprimir es múltiplo del primer parámetro que se ingresó, deberá mostrar el string “Back” en lugar del número.
✓ Si el número a imprimir es múltiplo del segundo parámetro ingresado, deberá mostrar el string “End” en su lugar del número.
✓ Si el número a imprimir es múltiplo de ambos parámetros, deberá mostrar el string “Back End” en lugar del número.
*/
const prompt = require('prompt-sync')();

let backEnd = (num1, num2) => {
    for (let i= 0; i<=100; i++){
        if(i % num2 === 0 && i % num1 === 0 ){
            console.log("Back end");
        } else if(i % num2 === 0){
            console.log("End");
        } else if( i % num1 === 0 ){
            console.log("Back");
        } else{
            console.log(i);
        }
    }
}
let num1 = parseInt(prompt("Dame un número: "));
let num2 = parseInt(prompt("Dame un número: "));
let resultado = backEnd(num1,num2);
console.log(resultado);