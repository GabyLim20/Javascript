/*
Crea un array de tuplas donde cada tupla almacene el nombre de un
producto (string), la cantidad disponible (número) y el precio por unidad
(número).
2. Añade tres productos al array con la siguiente información: "Manzana", 10,
1.5; "Pan", 20, 2.0; "Leche", 5, 1.2.
3. Imprime la información del segundo producto.
*/
let arrayProduct: [string, number, number][] = [
    ["Manzana", 10, 1.5],
    ["Pan", 20, 2.0],
    ["Leche", 5, 1.2]
];

console.log(arrayProduct[1]);
  
  // Modificar la cantidad del tercer producto
arrayProduct[2][1] = 8;
  
  // Mostrar el array actualizado
console.log(arrayProduct);
