let edad = 23;
let nombre = "Gabs"
let statusEstudio = true;
const pi = 3.14;
const pais = "México"
let cantidadDeLibro = 10;
let tituloLibro = "El principito";
let temas = ['Aventura' , "Fantasía"];
let autor = {
    nombre: "Antonie de Saint",
    nacionalidad: "Francesa"
}
let esMayor = edad>= 18;
let puedeVotar = esMayor && statusEstudio;

console.log("Nombre", nombre)
console.log("Edad", edad)
console.log("Estas Estudiando?", statusEstudio)
console.log("Constante PI", pi)
console.log("Constante País", pais)
console.log("Cantidad de libros:", cantidadDeLibro)
console.log("Titulo de libro", tituloLibro)
console.log("Temas del libro", temas)
console.log("Autor del libro", autor)
console.log("Es mayor de edad?", esMayor)
console.log("Puede votar?",puedeVotar)

