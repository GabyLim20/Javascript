/*Ejercicio 3: Métodos en Objetos

1. Modifica el objeto del ejercicio anterior para que incluya un método
llamado descripcion() que devuelva una descripción del libro.
2. Llama al método y muestra el resultado en la consola.*/
export class libro{
    public titulo:string;
    public autor:string;
    public anio: number;

    constructor(titulo:string, autor:string,anio:number){
        this.titulo = titulo;
        this.autor = autor;
        this.anio = anio
    }

    public descripcion(): string{
        return `El libro ${this.titulo} es del autor ${this.autor} y fue publicado en el anio ${this.anio}.`
    }
}
const libro2 = new libro("La Playa", "Garcia Marquez", 2010);
console.log(libro2.descripcion());