//1. any: Permite almacenar cualquier tipo de valor sin restricción
let anyValue: any = "Hola, soy any";
console.log(anyValue);
anyValue = 42;
console.log(anyValue);
anyValue = {name: "TypeScript", year: 5};//Objeto
console.log(anyValue);

//2. unknow: Similar a any pero requiere verificación antes de su uso
let unknownValue: unknown = "Hola, soy unknown";
console.log(unknownValue);
//Necesitamos verificar el tipo antes de usarlo como un str
if (typeof unknownValue === "string") {
    console.log(unknownValue.toUpperCase());
}

//3. void: se usa en funciones que no retornan valor
function logMessage(message:string): void {
    console.log(message);
}
logMessage("Esto es una función void")

//4. never: Representa el tipo de funciones que nunca retornan como aquellas que arrojan errores o tambien tienen los bucles infinitos
function throwError(errorMsg: string): never{
    throw new Error(errorMsg)
}
//throw new Error es una expresión en js( y ts) que se utiliza para lanzar una excepción. Esta interrumpe la ejecución normal del programa y se propaga hacia arriba en la pila de llamadas hasta que es manejada(usualmente un try catch)
// Si descomentan la lines de abajo, se arrojara un error y se detendra la ejecución del programa
//throwError("Esto es un error y nunca retornara ")

function infiniteLoop():never {
    while (true) {
        console.log("Este bucle nunca terminara");
    }   
}
//Desconectar abajo para ver loop infinito
//infiniteLoop();
//5. Null y Undefined: Representan la ausencia del valor
let nullValue: string | null = null;
console.log(nullValue);

nullValue = "Ahora tiene valor";
console.log(nullValue);
let undefinedValue: undefined = undefined //solo puede ser indefinido
console.log(undefinedValue);
//Uso de todos en un solo contexto
function processData(value:any): void {
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
processData("Texto");
processData(123);
processData(null);
processData({key: "valor"})
