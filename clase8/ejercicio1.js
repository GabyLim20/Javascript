const prompt=require('prompt-sync')({sigint:true});

let numero1 = parseFloat(prompt("Dame un número: "));
let numero2 = parseFloat(prompt("Ingrese un número: "));

if(numero1 > numero2){
    console.log("El mayor es: " + numero1)
} else if(numero2 > numero1){
    console.log("El mayor es: " + numero2)
}else{
    console.log("Los dos números son iguales " )
}




