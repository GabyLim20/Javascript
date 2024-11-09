/*
Declara una variable de tipo any y usa una aserción para tratarla como string,
accediendo a la propiedad .length.
*/
let varAny:any='Hola como estas';
//let variableString = (variable as string)
let variableString = <string>varAny

console.log(variableString.length);