const prompt = require('prompt-sync')({sigint:true});

let day = parseInt(prompt("Selecciona un número del 1 al 7: "));
if(day ===1){
    console.log("Lunes");
} else if(day === 2){
    console.log("Martes");
}else if(day === 3){
    console.log("Miercoles");
}else if(day === 4){
    console.log("Jueves");
}else if(day === 5){
    console.log("Viernes");
}else if(day === 6){
    console.log("Sabado");
}else if(day === 7){
    console.log("Domingo");
} else{
    console.log("Dame un número valido");
    day = parseInt(prompt("Selecciona un número del 1 al 7: "));
}

