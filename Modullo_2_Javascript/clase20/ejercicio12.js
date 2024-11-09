/*
Usando reduce, queremos calcular la nota promedio final de trabajos prácticos 
*/
const number = [4,7,8,5,10];
suma = number.reduce((accum, num) => accum + num/number.length, 0);
console.log(suma);