const prompt=require('prompt-sync')({sigint:true});

const edadMinima = 18;
const edadMaxima = 99;

let edad = parseInt(prompt("¿Cuál es tu edad? "));
if(edad >= edadMinima && edad <= edadMaxima){
    console.log("Tienes edad adecuada para hacer la encuesta")
} else{
    console.log("No tienes edad adecuada para hacer la encuesta")
}