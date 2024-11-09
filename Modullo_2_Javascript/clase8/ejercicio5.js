const prompt = require('prompt-sync')({sigint:true});

let numero1 = parseInt(prompt("Ingresa el primer número: "));
let numero2 = parseInt(prompt("Ingresa el segundo número: "));
let numero3 = parseInt(prompt("Ingresa el tercer número: "));

if(numero1 > numero2 && numero1 > numero3){
    console.log(`El número 1 ${numero1} es el mayor`)
} else if(numero2 > numero1 && numero2 > numero3){
    console.log(`El número 2 ${numero2} es el mayor`)
} else if(numero3 > numero1 && numero3 > numero2){
    console.log(`El número 3 ${numero3} es el mayor`)
}else{
    console.log("Se encontraron 2 o más números mayores")
}