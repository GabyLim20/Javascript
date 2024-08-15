const prompt=require('prompt-sync')({sigint:true});

const RANGO_MINIMO = 1;
const RANGO_MAXIMO = 50;
let numero = parseInt(prompt("Ingrese un múmero: "));

if(numero > RANGO_MINIMO && numero < RANGO_MAXIMO){
    console.log("Estas dentro del rango definido")
} else{
    console.log("Fuera de rango")
}