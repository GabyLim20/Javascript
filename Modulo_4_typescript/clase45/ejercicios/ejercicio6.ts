/*: Crea una clase base Zoologico con el método abrirPuertas(), que
indique que el zoológico está abierto. Crea una clase derivada ZoologicoSafari
que sobrescriba el método abrirPuertas() pero llamando al método de la clase
base con super */
class Zoologico{
    abrirPuertas(){
        console.log("Esta abierto");
        
    }
}
class ZoologicoSafari extends Zoologico{
    abrirPuertas(): void {
        super.abrirPuertas()
        console.log(`Este zoologico tiene animales de la sabana africana.`);
        
    }
}
const zoo = new ZoologicoSafari();
zoo.abrirPuertas();