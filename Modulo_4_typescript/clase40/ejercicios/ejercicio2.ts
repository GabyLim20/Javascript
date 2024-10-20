/*
Declara una tupla para representar un libro con la siguiente información:
título (string), año de publicación (número) y si está disponible (booleano).
2. Inicializa la tupla con los valores: "El principito", 1943, true.
3. Imprime el título del libro y el año de publicación.
4. Cambia el valor de disponibilidad a false y muestra el nuevo valor por
consola.
*/

let book: [string, number, boolean];
book = ["El principito", 1943, true];
console.log(book[0]);
console.log(book[1]);
book[2] = false;
console.log(book[2]);