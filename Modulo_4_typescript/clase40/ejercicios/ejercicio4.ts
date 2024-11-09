/*
Crea un array que contenga los nombres de tus 5 frutas favoritas.
2. Usa un método para añadir otra fruta al final del array.
3. Encuentra el índice de una fruta específica (por ejemplo, "Manzana")
dentro del array.
4. Elimina la última fruta y muestra el array actualizado por consola.
*/
let fruitArray:string[] = ["Manzana", "Mango", "Fresa", "Platano","Sandia"];
fruitArray.push("Uva");

console.log(fruitArray);
let indice = fruitArray.indexOf("Mango");
console.log(indice); 
fruitArray.pop();

console.log(fruitArray);