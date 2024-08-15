const prompt = require('prompt-sync')({sigint:true});

let edad = parseInt(prompt("¿Cuál es tú edad? "));

if(edad >= 18){
    console.log("Eres mayor de edad")
} else{
    console.log("Eres menor de edad")
}