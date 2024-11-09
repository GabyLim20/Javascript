/*Define una clase base Negocio con un método protegido operar().
Define otra clase Consultoria que herede de Negocio y sobrescriba el método
operar() para mostrar un mensaje sobre cómo opera el negocio de consultoría. */
class Negocio{
    protected operar():void{}
}
class Consultoria extends Negocio{
    public operar():void{
        super.operar()
        console.log("El negocio tiene buena operación");  
    }
}
const consulta = new Consultoria();
consulta.operar();

