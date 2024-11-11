/*Crea una interfaz Empleado con un método trabajar. Implementa esta interfaz
en clases Programador y Disenador, donde cada clase debe implementar el
método con su propia lógica. Luego, crea una función que reciba un objeto de
tipo Empleado y llame a su método trabajar. */

interface Empleado {
    trabajar(): void;
}

export class Programador implements Empleado {
    trabajar(): void {
        console.log("El programador está escribiendo código.");
    }
}

class Disenador implements Empleado {
    trabajar(): void {
        console.log("El diseñador está creando un diseño.");
    }
}

function procesarTrabajo(empleado: Empleado): void {
    empleado.trabajar(); 
}


const programador: Empleado = new Programador();
const disenador: Empleado = new Disenador();

procesarTrabajo(programador); 
procesarTrabajo(disenador);   