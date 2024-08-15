/* 
Solicita al usuario una edad y usa una función flecha para clasificarla en niño,
adolescente, adulto o adulto mayor.
*/

const prompt=require('prompt-sync')();
let edad = parseInt(prompt("¿Cuál es tú edad? "));
const verificarEdad = (edad) => {
    if(edad> 0 && edad<15){
        return "Niño"
    } else if(edad>=15  && edad<19){
        return "Adolescente"
    } else if(edad>=19  && edad<60){
        return "Adulto"
    }else{
        return "Adulto Mayor"
    }
}

let resultado = verificarEdad(edad);
console.log(`Tu clasificación es ${resultado}`);
