/*Crea una clase abstracta Vehiculo con una propiedad velocidad y un método
abstracto mover(). Luego, implementa dos clases concretas: Auto y Bicicleta. Usa
los modificadores de acceso para controlar la visibilidad de las propiedades. */
abstract class Vehiculo{
    constructor(protected velocidad:number){
        this.velocidad = velocidad
    }
    abstract mover():void;
}
class Auto extends Vehiculo{
    mover(): void {
        console.log(`El auto se esta moviendo a una velocidad de ${this.velocidad} km/h`);
    }
}
class Bicicleta extends Vehiculo{
    mover(): void {
        console.log(`El auto se esta moviendo a una velocidad de ${this.velocidad} km/h`);
    }
}

const auto = new Auto(50);
const bici = new Bicicleta(20);
auto.mover();
bici.mover();