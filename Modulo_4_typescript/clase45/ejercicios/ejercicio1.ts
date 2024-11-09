/*Define una clase base Torta que tenga propiedades generales como
nombre y tipo, y un método hacerDescripcion() que devuelva una descripción
general de la torta. Luego, crea una clase derivada TortaDeChocolate que
extienda de Torta y sobrescriba el método hacerDescripcion() para que devuelva
"Soy una torta de chocolate, deliciosa y suave"*/
class Torta{
    nombre:string;
    tipo:string;
    constructor(nombre:string, tipo: string){
        this.nombre = nombre,
        this.tipo = tipo
    }
    hacerDescripcion():string{
        return `Esta es un tipo de ${this.tipo} llamado ${this.nombre}`;
        
    }
}
class TortaDeChocolate extends Torta{
    constructor(nombre:string){
        super(nombre,"Chocolate")
    }
    hacerDescripcion(): string {
        return "Soy una torta de chocolate, deliciosa y suave"
    }
}

const torta = new TortaDeChocolate("Torta Feliz");
console.log(torta.hacerDescripcion());
