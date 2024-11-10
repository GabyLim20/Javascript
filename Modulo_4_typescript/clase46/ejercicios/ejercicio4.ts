/*Crea una interfaz PagoOnline con un método procesarPago().
Crea una clase abstracta Pago con un método concreto validarMonto() y un
método abstracto completarPago().
Implementa ambas estructuras en una clase concreta PagoConTarjeta. */
interface PagoOnline{
    procesarPago(): void
}
abstract class Pago {
    monto:number;

    constructor(monto:number){
        this.monto = monto;
    }
    validarMonto(){
        console.log(`Validando monto: El monto a abonar es ${this.monto}`);
    }
    abstract completarPago():void
}
class PagoConTarjeta extends Pago implements PagoOnline{
    constructor(monto:number){
        super(monto);
    }
    
    procesarPago(): void {
        super.validarMonto();
    }
    completarPago(): void {
        console.log(`El monto abonado con tarjeta es: ${this.monto}.`);
    }
}
const pago = new PagoConTarjeta(500);
pago.procesarPago();
pago.completarPago();