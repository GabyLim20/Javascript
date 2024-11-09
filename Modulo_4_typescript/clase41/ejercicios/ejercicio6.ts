/*Ejercicio 6: Uso de this
1. Crea una clase llamada Mariposa con propiedades nombre y color, y un
método volar() que use this para referirse a las propiedades de la
instancia.
2. Crea una instancia de la clase y llama al método.*/
class Mariposa{
    nombre: string;
    color: string;
    constructor(nombre:string,color: string){
        this.nombre = nombre;
        this.color = color;
    }
    public volar(): void{
        console.log(`La mariposa ${this.nombre} es de color ${this.color} y esta volando.`);
    }
}

const mariposa = new Mariposa("Juana", "morado");
mariposa.volar();