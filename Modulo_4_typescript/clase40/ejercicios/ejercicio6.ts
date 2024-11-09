/*
Declara un enum llamado Colores con los valores Rojo, Verde, Azul.
2. Crea un array de tuplas donde cada tupla tenga el nombre de un color
(string) y el valor correspondiente del enum.
3. Añade una tupla más con otro color y su valor del enum.
4. Muestra por consola todo el array de tuplas
*/
enum Colors {
    Rojo,
    Verde,
    Azul
}

let arrayColor: [string,Colors][] = [
    ["Rojo", Colors.Rojo],   
    ["Verde", Colors.Verde], 
    ["Azul", Colors.Azul] 
]
arrayColor.push(["Amarillo", Colors.Rojo]);
console.log(arrayColor);
