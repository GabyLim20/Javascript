let vehiculo = "coche";
let litrosConsumidos = 5;
let total = 0;
if(litrosConsumidos <= 25){
    total = 50;
} else{
    total = 25;
}
switch(vehiculo){
    case "coche":
        total = total + 86;
        console.log(`El total a pagar es de ${total}`);
        break;
    case "moto":
        total = total + 70;
        console.log(`El total a pagar es de ${total}`);
        break;
    case "“autobús”":
        total = total + 55;
        console.log(`El total a pagar es de ${total}`);
        break;
}

