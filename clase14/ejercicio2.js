/*
Define dos objetos libro1 y libro2 con las siguientes propiedades y valores:
✓ título: una cadena con el título del libro.
✓ autor: una cadena con el nombre del autor del libro.
✓ anioPublicacion: un número con el año de publicación del libro.
 
Luego, crea una función llamada mostrarLibro que tome un arreglo de libros como parámetro y muestre por consola la información de cada libro en el formato especificado.
 */

let libro1 = {
    titulo: "Chupa el perro",
    autor: "German Garmendia"
}
let libro2 = {
    titulo: "Vas a ser mía",
    autor: "Anny Petterson"
}
let libros = [];
function mostrarLibro(libros) {
    libros.push(libro1, libro2)
    return libros 
}
console.log(mostrarLibro(libros));