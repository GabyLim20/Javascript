/*Ejercicio 2: Creación de Objetos y Atributos
1. Define un objeto que represente un libro con las siguientes propiedades:
título, autor, y año de publicación.
2. Crea una instancia de ese objeto y muestra sus propiedades en la consola.*/
export class libro {
    public titulo:string;
    public autor:string;
    public anio: number;

    constructor(titulo:string, autor:string,anio:number){
        this.titulo = titulo;
        this.autor = autor;
        this.anio = anio
    }
}
const books = new libro("Vas a ser Mia","Johan",2023);
console.log(`Titulo ${books.titulo}, Autor ${books.autor}, Año ${books.anio}`);
