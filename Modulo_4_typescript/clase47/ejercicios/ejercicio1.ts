/*1. Ejercicio de Coche
Diseña una clase Coche que represente un vehículo. Esta clase debe tener
propiedades privadas para marca, modelo, año, y kilometraje. Implementa
métodos para encender el coche y realizar un viaje, que incrementen el
kilometraje. Asegúrate de que el año no sea menor que 1886 (el año en que se
inventó el coche) y que el kilometraje no pueda ser negativo. Si se intenta
establecer un año o kilometraje no válido, imprime un mensaje indicando el
error.*/
export class Coche {
    private _marca: string;
    private _modelo: string;
    private _año: number;
    private _kilometraje: number;

    constructor(marca: string, modelo: string, año: number) {
        if (año < 1886) {
            console.log("El año no puede ser anterior a 1886.");
            this._año = 1886; // Establece a un valor predeterminado válido
        } else {
            this._año = año;
        }
        this._marca = marca;
        this._modelo = modelo;
        this._kilometraje = 0; // Inicia en 0
    }

    public encender(): void {
        console.log(`El coche ${this._marca} ${this._modelo} está encendido.`);
    }

    public realizarViaje(km: number): void {
        if (km < 0) {
            console.log("El kilometraje no puede ser negativo.");
        } else {
            this._kilometraje += km;
            console.log(`Se han recorrido ${km} km. Kilometraje total: ${this._kilometraje} km.`);
        }
    }

    public get kilometraje(): number {
        return this._kilometraje;
    }
}

// Uso
const miCoche = new Coche('Toyota', 'Corolla', 2020);
miCoche.encender();
miCoche.realizarViaje(100);
console.log(`Kilometraje actual: ${miCoche.kilometraje} km.`);