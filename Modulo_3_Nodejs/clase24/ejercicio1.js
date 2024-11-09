/*
En este archivo, crea un objeto JSON que represente un libro. El objeto debe tener las siguientes propiedades: titulo, autor, año, genero (puede
ser un array de géneros).
Instrucciones:
• Muestra en la consola el título y el autor del libro.
• Actualiza el año del libro a un valor más reciente.
• Añade una nueva propiedad llamada páginas que indique el número
de páginas del libro.
• Muestra el objeto actualizado en la consola.
*/

const libro = {
    "titulo": "Vas a ser mía",
    "autor": "Anny Peterson",
    "anio": 2020,
    "genero": ["Romance" , "Acción"]
}; 

console.log(libro.titulo);
console.log(libro.autor);
libro.anio = 2024;
libro.pagina = 432;

console.log("El libro fue actualizado con el año " + libro.anio + " libro de páginas" + libro.pagina);
console.log(libro);



