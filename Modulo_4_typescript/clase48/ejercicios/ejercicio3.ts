/*Crea una clase Banco con un saldo inicial privado. El saldo solo puede ser
modificado a través de un método depositar y otro retirar, los cuales deben
validar que la cantidad no sea negativa. Implementa métodos públicos para
consultar el saldo. */
class Banco{
    private _saldo: number;
    constructor(saldo:number){
        this._saldo = saldo
    }
    depositar(cantidad: number): void {
        if (cantidad > 0) {
            this._saldo += cantidad;
            console.log(`Se han depositado ${cantidad}. Saldo actual: ${this._saldo}`);
        } else {
            console.log("Cantidad de depósito no válida.");
        }
    }

    // Método para retirar dinero
    retirar(cantidad: number): void {
        if (cantidad > 0 && cantidad <= this._saldo) {
            this._saldo -= cantidad;
            console.log(`Se han retirado ${cantidad}. Saldo actual: ${this._saldo}`);
        } else {
            console.log("Cantidad de retiro no válida o insuficiente.");
        }
    }
    consultarSaldo(): number {
        return this._saldo;
    }
}
const miBanco = new Banco(1000);
miBanco.depositar(500);  
miBanco.retirar(200);    
console.log(miBanco.consultarSaldo()); 
