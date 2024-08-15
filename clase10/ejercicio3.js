/*
While
Crea un programa que solicite al usuario ingresar números continuamente
 hasta que el usuario ingrese un número negativo. Luego, imprime la suma de 
 todos los números ingresados. */

 const prompt=require('prompt-sync')({sigint:true});
 let number = parseInt(prompt("Ingresa el número: "));
 let suma = 0;
 while(number>0){
    suma+= number;
    number = parseInt(prompt("Ingresa el número: "));
 }
 console.log(`La suma de los números ingresados son ${suma}`);
