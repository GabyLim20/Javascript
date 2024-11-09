const prompt = require('prompt-sync')();
/*
Ejercicio 3: Número secreto
Escribí un programa que piense un número de forma aleatoria del 1 al 10 
y le pida al usuario que lo trate de adivinar. Si el número es correcto debe imprimir en la consola 
“Felicitaciones, ¡ese era!", de lo contrario, debe imprimir "Lo siento, ¡intenta nuevamente!"
*/
let aleatory = Math.floor(Math.random()*10) +1;
const verifyNumber = (number) =>{
    let status;
    if(number == aleatory){
        status = "Felicitaciones, ¡ese era!";
    } else{
        status = `Lo siento, ¡intenta nuevamente el número era ${aleatory}`;
    }
    return status;
}


let number = parseInt(prompt("¿Cuál es el número que deseas poner? "));

let resultadoTotal = verifyNumber(number);
console.log(resultadoTotal)