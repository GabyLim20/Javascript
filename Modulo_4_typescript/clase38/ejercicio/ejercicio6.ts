/*
Declara una variable de tipo unknown. Asigna diferentes tipos de valores a esta variable, y utiliza el operador typeof para verificar el tipo antes de imprimir los valores.
*/

let undefinedValues: undefined = undefined //solo puede ser indefinido
console.log(undefinedValues);
//Uso de todos en un solo contexto
function processDat(value:any): void {
    if (typeof value === "string") {
        console.log("El valor es una cadena: ", value);
    } else if (typeof value === "number") {
        console.log("El valor es un número: ", value);
    } else if (value === null || value === undefined) {
        console.log("El valor es null o undefined: ", value);
    } else{
        console.log("El valor es de otro tipo: ", value);
        
    }
}
processDat("Texto");
processDat(123);
processDat(null);
processDat({key: "valor"})
