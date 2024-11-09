import {Empleado} from "./empleados";

const empleados: Empleado[] = [
    new Empleado("Gabs", "Back End", 6000),
    new Empleado("Poche", "Carpintero", 15000),
    new Empleado("Martha", "Maestra",18000),
    new Empleado("Rigo","Constador",16000)
];
//Agregar habilidad
empleados[0].agregarHabilidad("Javascript");
empleados[0].agregarHabilidad("Typescript");
empleados[1].agregarHabilidad("Cortar");
empleados[1].agregarHabilidad("Arreglar");
empleados[2].agregarHabilidad("Enseñar");
empleados[2].agregarHabilidad("Practicar");
empleados[3].agregarHabilidad("Contar");
empleados[3].agregarHabilidad("Restar");


function mostrarEmpleadosSalarioAlto(empleados: Empleado[]): void {
    //recorre array empleados
    empleados.forEach(empleado => {
        if (empleado.obtenerSalarioAnual() > 50000) {
            empleado.mostrarInformacion(); //llamamos a mostrarInfo
        }
    })
}
mostrarEmpleadosSalarioAlto(empleados);
