/*Crea un sistema para gestionar las reservas de un hotel. Define una
clase base Cliente con propiedades privadas como nombre, numeroHabitacion,
y un método reservar(). Luego, crea dos clases derivadas ClientePremium y
ClienteCorporativo que sobrescriban el método reservar() para añadir
funcionalidades adicionales.
Adicionalmente, crea una interfaz Beneficios con un método accederBeneficios().
Ambas clases derivadas deben implementar esta interfaz. En la clase
ClientePremium, el cliente podrá acceder al spa y desayuno gratis, y en la clase
ClienteCorporativo, el cliente podrá acceder a salas de reuniones y descuentos. */
interface Beneficios{
    accederBeneficios(): void;
}
class Cliente{
    private nombre: string;
    private numeroHabitacion: number;
    constructor(nombre:string,habitacion:number){
        this.nombre = nombre;
        this.numeroHabitacion = habitacion;
    }

    reservar(){
        console.log(`${this.nombre} ha reservado la habitación número ${this.numeroHabitacion}.`);
    }
    obtenerNombre(): string {
        return this.nombre;
      }
}
