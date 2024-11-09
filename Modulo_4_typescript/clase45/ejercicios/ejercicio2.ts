/*Crea una clase base Maestro con propiedades protegidas nombre y
materia, y un método enseñar(). Luego, crea una clase derivada
MaestroMatematicas que extienda de Maestro y sobrescriba el método
enseñar() para imprimir un mensaje específico de matemáticas. */
class Maesto{
    protected nombre:string;
    protected materia:string;
    constructor(nombre:string, materia:string){
        this.nombre = nombre,
        this.materia = materia
    }
    enseñar():void{
        console.log(`${this.nombre} enseña ${this.materia}.`);
    }
}
class MaestroMatematicas extends Maesto{
    constructor(nombre:string, materia:string){
        super(nombre,materia);
    }
    enseñar(): void {
        console.log(`${this.nombre} está resolviendo sumas.`);
    }
}
const maestro = new MaestroMatematicas("Martha", "Matematicas")
maestro.enseñar();