/*Implementa una clase Calculadora que tenga un método sumar. El método debe
estar sobrecargado para permitir la suma de:
• Dos números enteros.
• Tres números enteros.
• Dos cadenas, concatenando las dos cadenas. */
class Calculadora {
    // Sobrecargas de la función
    sumar(n1: number, n2: number, n3?: number): number;
    sumar(n1: string, n2: string): string;
  
    // Implementación de la función
    sumar(n1: number | string, n2: number | string, n3?: number): number | string {
      if (typeof n1 === "number" && typeof n2 === "number") {
        return n3 !== undefined ? n1 + n2 + n3 : n1 + n2;
      } else if (typeof n1 === "string" && typeof n2 === "string") {
        return n1 + n2;
      } else {
        return "Tipo de entrada no válido";
      }
    }
  }
  
const calculadora = new Calculadora();
console.log(calculadora.sumar(2,3));
console.log(calculadora.sumar(2,3,2));
console.log(calculadora.sumar("Hola ","Gabs"));