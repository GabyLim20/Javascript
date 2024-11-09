/*
Crea una función llamada crearLibro que acepte tres parámetros:
titulo (string), autor (string) y paginas (number). La función debe devolver un
objeto con esas propiedades. Luego, crea dos libros utilizando la función y
muestra sus detalles en la consola.
*/
function crearLibro(titulo:string, autor:string,paginas:number){
    const objetoCreado = {
        tituloLibro:titulo,
        autorLibro:autor,
        paginasLibro:paginas 
    }
    return objetoCreado;
}
console.log(crearLibro("Soledad", "Paz", 500))
console.log(crearLibro("Vas a ser mía", "Ana", 140))