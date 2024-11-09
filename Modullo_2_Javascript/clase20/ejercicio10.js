/* REDUCE
Calcular la suma de todos los números que están en el array.
*/
const number = [6, 1, 34, 94, 3, 17];
suma = number.reduce((accum, num) => accum + num,0);
console.log(suma);
