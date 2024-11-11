/*3. Ejercicio de Estudiante
Diseña una clase Estudiante que contenga propiedades privadas para nombre,
edad, y calificaciones. Implementa métodos para agregar calificaciones y
calcular el promedio. Imprime un mensaje en caso de que se intente agregar
una calificación inválida (fuera del rango 0-100) o si no hay calificaciones para
calcular el promedio.*/

export class Estudiante {
    private nombre: string;
    private edad: number;
    private calificaciones: number[];

    constructor(nombre: string, edad: number, calificaciones?: []) {
        this.nombre = nombre;
        this.edad = edad;
        this.calificaciones = [];
    }

    public get nombreEstudiante(): string {
        return this.nombre;
    }
    public get edadEstudiante(): number {
        return this.edad;
    }
    public get calificacionesEstudiante(): number[] {
        return this.calificaciones;
    }

    public agregarCalificaciones(value: number) {
        if (value >= 0 && value <= 100) {
            this.calificaciones.push(value);
            console.log(this.calificaciones);
        } else {
            console.log(`${value} no es un valor valido de calificacion.`);
        }

    }

    public calcularPromedio(): number | undefined {
        if (this.calificaciones.length > 0) {
            let promedio = this.calificaciones.reduce((total, num) => total + num, 0) / this.calificaciones.length;
            console.log(`El promedio de calificaciones es: ${promedio}`);
            return promedio;
        } else {
            console.log("No hay calificaciones para calcular el promedio.");
        }
    }
}

const estudiante = new Estudiante("Gabs", 24)
console.log(estudiante);
estudiante.agregarCalificaciones(100);
console.log(estudiante);