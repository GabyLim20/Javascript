 export class Empleado{
    nombre: string;
    cargo: string;
    salario: number;
    habilidades: string[];
    constructor(nombre:string, cargo: string, salario: number){
        this.nombre = nombre;
        this.cargo = cargo;
        this.salario = salario;
        this.habilidades = [];
    }
    agregarHabilidad(habilidad:string):void{
        this.habilidades.push(habilidad)
    }
    obtenerSalarioAnual():number{
        return this.salario * 12
    }
    mostrarInformacion():void{
        console.log(`Empleado: ${this.nombre}, Cargo: ${this.cargo}, Salario Anual: ${this.obtenerSalarioAnual()}`);
        console.log(`Habilidades: ${this.habilidades.join(", ")}`);
    }
}
