/*
Queremos eliminar todos los números negativos
o Con los números restantes, obtener el doble de cada uno
 
o Finalmente, obtener la suma de todos los números que obtuvimos
*/
const datos = [2, -4, 6, 0 , 5, -1]
let mayor = datos.filter(costo => costo>=0)
let doble = mayor.map(num => num *2);
let total = doble.reduce((accum, num) => accum + num,0);
console.log(mayor);
console.log(doble);
console.log(total);


