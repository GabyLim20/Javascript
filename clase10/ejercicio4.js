/*
Ejercicio 4: Do While
Escribe un programa que solicite al usuario ingresar una contraseña. Si la contraseña es incorrecta, 
debe volver a pedirla hasta que el usuario ingrese la correcta. La contraseña correcta es "1234".
*/

const prompt=require('prompt-sync')({sigint:true});

let password = 0;

do{
     password = parseInt(prompt("Ingresa la contraseña: "));
}while(password != 1234);
console.log(`La contraseña correcta es "1234"`);