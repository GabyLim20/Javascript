/*Crea una clase base Compania con un atributo privado
nombreCompania y un atributo protegido ingresosAnuales. Crea una clase
derivada EmpresaTecnologia que use el atributo protegido y agregue un
método que calcule el doble de los ingresos anuales. */
class Compania{
    private nombreCompania: string;
    protected ingresosAnuales: number;
    constructor(nombre:string, ingreso:number){
        this.nombreCompania = nombre;
        this.ingresosAnuales = ingreso
    }
    obtenerNombreCompania(): string {
        return this.nombreCompania;
      }
}
class EmpresaTecnologia extends Compania{
    constructor(nombreCompania: string, ingresosAnuales: number){
        super(nombreCompania,ingresosAnuales);
    }
    calcularDoble():number{
        return this.ingresosAnuales * 2;
    }
}
const empresa = new EmpresaTecnologia("Sidel", 64929);
  console.log(empresa.obtenerNombreCompania()); 
  console.log(empresa.calcularDoble());