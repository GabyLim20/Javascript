//Ejemplo de tipos ´rimitivos en TypeScript
//1.String (Cadena de texto)
let nombre: string = "Gabs";
let saludo: string = `Hola, ${nombre}, bienvenida a TypeScript`;
console.log(saludo);

//2. number( Numeros: enteros,decimales, notaciones cientificas)
let entero: number = 2;
let decimal : number = 3.14;
let cientifico: number = 1e5;
console.log("Entero: ", entero);
console.log("Decimal: ", decimal);
console.log("Cientifico: ", cientifico);

//3. boolean (Valores logicos: true y false);
let isStudent: boolean = true;
let hasTitle: boolean = false;
console.log(`Eres estudiante: ${isStudent} y ya tienes titulo: ${hasTitle}`);

//4. null (Ausencia intencional de valor)
let valorNulo: null = null;
console.log("Valor nulo: ", valorNulo);

//5. Undefined (Valor no iniciado)
let valorIndefinido: undefined = undefined;
console.log("Valor indefinido", valorIndefinido);

//6. Symbol (Simbolo unico)
let id1: symbol = Symbol("id");
let id2: symbol = Symbol("id");
console.log("Son simbolos unicos: ", id1 === id2);
