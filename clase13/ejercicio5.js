/*

Se ingresa por teclado un número natural de hasta 2 cifras,
si tiene una cifra que muestre lo mínimo que le falta para ser un número de 2 cifras; 
de lo contrario, que muestre lo mínimo que le falta para ser un número de 3 cifras. 
Considerar que el usuario ingresa números de hasta dos cifras.
*/

const prompt=require('prompt-sync')();

const verifyNumber = (number) => {
    let status;
    let discount;
    //Verificar origen del auto
    if(number < 10){
        discount = 10 - number
        status = `Al número ${number} le falta ${discount} para hacer de 2 digitos`; 
    } else if(number >=10){
        discount = 100 - number
        status = `Al número ${number} le falta ${discount} para hacer de 3 digitos`
    } else{
        status = `Al número ${number} no cumple con las indicaciones correspondientes`
    }
    return status;
}
let getNumber = prompt("¿Cuál es el número? ");
let result = verifyNumber(getNumber);
console.log(result);