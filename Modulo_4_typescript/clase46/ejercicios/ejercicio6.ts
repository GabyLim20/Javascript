/*Define una clase abstracta Producto con:
• Propiedades protegidas: nombre, precio.
• Un método abstracto calcularDescuento().
Implementa dos subclases: Ropa y Electronica.
• La subclase Ropa aplicará un 10% de descuento.
• La subclase Electronica tendrá un 5% de descuento.
Añade un método concreto en la clase abstracta para mostrar la información del
producto. */
abstract class Producto{
    protected nombre: string;
    protected precio : number;
    constructor(nombre:string, precio:number){
        this.nombre = nombre;
        this.precio = precio;
    }
    abstract calcularDescuento():void
}
