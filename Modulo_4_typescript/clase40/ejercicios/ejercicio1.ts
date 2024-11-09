/*
Ejercicio 1: Operaciones básicas con Arrays
1. Declara un array de números con los valores [5, 10, 15, 20, 25].
2. Imprime el tercer elemento del array.
3. Añade el número 30 al final del array.
4. Elimina el primer número del array.
5. Muestra por consola la longitud actual del array.
*/

let arrayNumber:number[] = [5, 10, 15, 20, 25];
console.log(arrayNumber[2]);
arrayNumber.push(30);
console.log('Array con el numero 30 agregado al final: '+ arrayNumber);
arrayNumber.shift();
console.log(arrayNumber);
console.log("Longitud: ",arrayNumber.length);
