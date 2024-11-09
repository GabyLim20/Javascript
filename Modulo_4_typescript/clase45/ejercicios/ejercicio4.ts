/*Define una clase base Flor con el método describir(), que imprime un
mensaje general sobre la flor. Luego, crea dos clases derivadas Rosa y Girasol,
cada una sobrescribiendo el método describir() con un mensaje específico */
class Flor{
    describir(): void {
        console.log("Es una flor.");
      }
}
class Rosa extends Flor{
    describir(): void {
        console.log("Es una rosa roja.");
      }
}
class Girasol extends Flor{
    describir(): void {
        console.log("Es una girasol amarillo.");
      }
}
const rosa = new Rosa();
rosa.describir();
const girasol = new Girasol();
girasol.describir();