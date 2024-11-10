/*Modela un sistema de cafetería. Crea una interfaz Bebida que defina un método
preparar(). Implementa esta interfaz en dos clases: Cafe y Te. Usa abstracción
para que ambas bebidas oculten su lógica de preparación interna pero
expongan un comportamiento común. */
interface Bebida{
    preparar():void
}
class Cafe implements Bebida{
    preparar(): void {
        console.log("Coloca 1 cuchara de cafe con agua caliente");
        
    }
}
class Te implements Bebida{
    preparar(): void {
        console.log("Coloca 1 sobre de té agua caliente");
        
    }
}
const cafe = new Cafe();
  const te = new Te();
  
cafe.preparar();  
te.preparar(); 