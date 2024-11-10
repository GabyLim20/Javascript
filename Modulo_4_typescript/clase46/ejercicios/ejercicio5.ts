/*Diseña un sistema de transporte público. Define:
• Una interfaz VehiculoElectrico con el método cargarBateria().
• Una clase abstracta Transporte con el método abstracto mover().
Implementa ambas estructuras en una clase concreta AutobusElectrico. */
interface VehiculoElectrico{
    cargarBateria():void
}
abstract class Transporte{
    constructor(protected tipo: string) {
        this.tipo = tipo;
    }
    abstract mover(

    ):void
}
class AutobusElectrico extends Transporte implements VehiculoElectrico {
    constructor(protected tipo: string, protected bateria: number) {
        super(tipo);

        this.bateria = bateria;

    }
    mover(): void {
        if (this.bateria <50) {
            console.log("Cargame");
            
        } else{
            console.log("Sigue conduciendo");
            console.log(`El ${this.tipo} se esta moviendo.`);
        }
        
    }
    
    cargarBateria(): void {
        this.bateria = 100;
    }

}
let bus = new AutobusElectrico("Autobus", 70);
bus.mover();
bus.cargarBateria()