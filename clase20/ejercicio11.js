/*
Utilizando reduce, queremos calcular la multiplicación de todos los números que están en el array.
*/
const number = [6, 1, 34, 94, 3, 17];
suma = number.reduce((accum, num) => accum * num, 1);
console.log(suma);