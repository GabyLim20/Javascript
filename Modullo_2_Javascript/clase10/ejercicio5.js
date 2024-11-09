/*
Ejercicio 5: If Ternario
Escribe un programa que lea una nota (entero entre 0 y 100) 
e imprima el equivalente en letras siguiendo esta escala:
✓ A si la nota está entre 90 y 100 
✓ B si la nota está entre 80 y 89 
✓ C si la nota está entre 70 y 79 
✓ D si la nota está entre 60 y 69 
✓ F si la nota está entre 0 y 59
Utiliza operadores ternarios para determinar la calificación en letras.*/

const prompt=require('prompt-sync')({sigint:true});
let number = parseInt(prompt("Ingresa tu calificación: "));

console.log(number>=90 && number<=100? "Tienes una A": number >=80 && number <= 89?
    "Tienes una B": number >=70 && number <= 79? "Tienes una C": number >=60 && number <= 69? 
    "Tienes una D": number >=0 && number <= 59? "Tienes una F": "Nota no valida");