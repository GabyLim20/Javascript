const prompt = require('prompt-sync')();
let temperature = parseInt(prompt("¿A cuántos grados estamos? "));
if(temperature > 22){
    console.log("Esta soleado muy buen momento para una carnita asada ");
} else {
    console.log("Esta fresco, vamos por algo caliente ");
}
let isRain = prompt("¿Esta lloviendo S/N? ").toUpperCase();
if(isRain == "S"){
    console.log("Lleva paraguas ");
} else if(isRain == "N"){
    console.log("Es un bonito día ");
} else{
    console.log("Lleva paraguas ");
}
let openHour = parseFloat(prompt("¿A qué hora abren? ")); 
let closeHour = parseFloat(prompt("¿A qué hora Cierran? ")); 
let timeNow= parseFloat(prompt("¿Qué hora tienes? ")); 
if(timeNow>= openHour && timeNow <= closeHour){
    console.log("Esta abierto, fuga. ");
}else{
    console.log("Esta cerrado, intenta en el horario adecuado ");
}
let isHouse = prompt("¿Vives en un depa o una casa? ").toLowerCase();
if(isHouse == "depa"){
    let elevatorFloor = prompt("¿A que piso vas? ");
    console.log(`Bajando al piso ${elevatorFloor}`);
}
let mountMeat = parseFloat(prompt("¿Cuánta carne vas a llevar? "));
console.log(`Te paso ${mountMeat} gramos de carne y serían $100`);
//\n
let methodPay = parseInt(prompt(`¿Cuál va hacer tu metodo de pago?\n 1- Efectivo\n 2- Tarjeta `)); 
if(methodPay === 1){
    console.log("Pagado ")
}else if(methodPay === 2){
    console.log("Te paso la terminal ")
}else{
    console.log("Dame un metodo de pago valido ")

}




