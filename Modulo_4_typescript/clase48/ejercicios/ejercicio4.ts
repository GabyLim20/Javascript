/*Implementa una clase abstracta DispositivoElectronico con métodos abstractos
encender y apagar. Crea dos clases concretas Televisor y Radio, que
sobrescriban estos métodos */
abstract class DispositivoElectronico{
    abstract encender():void;
    abstract apagar():void;
}
class Televisor extends DispositivoElectronico{
    encender(): void {
        console.log("El televisor se ha encendido.");
    }
    apagar(): void {
        console.log("El televisor se ha apagado.");
    }
}
class Radio extends DispositivoElectronico {
    encender(): void {
        console.log("La radio se ha encendido.");
    }

    apagar(): void {
        console.log("La radio se ha apagado.");
    }
}
const televisor = new Televisor();
televisor.encender(); 
televisor.apagar();   

const radio = new Radio();
radio.encender(); 
radio.apagar(); 