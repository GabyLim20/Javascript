/*
A partir del siguiente array de frases, escribe la función “procesarFrases” que realice las siguientes tareas:
1. Convierta cada frase a minúsculas. Investigar el método “.toLowerCase()” para este punto.
https://developer.mozilla.org/en- US/docs/Web/JavaScript/Reference/Global_Objects/String/toLower Case
2. Divida cada frase en palabras.
3. Reemplace las palabras "malo" por "bueno".
4. Combine las palabras de cada frase en una nueva cadena
separada por espacios.
5. Devuelva un nuevo array con las frases modificadas.
*/
let frases = [
"El clima es MALO hoy",
"Este libro es muy MALO", 
"El servicio aquí es MALO"
];

let procesarFrases = (frases) => {
    let newFrase = frases.map(frase => frase.toLowerCase());
    let divider = newFrase.map(frase => frase.split(" "));
    let replaces = divider.map(frase => frase.replace(/malo/g, "bueno"));
    let combinar = replaces.map(frase => frase.split(' /\ ')).join(' ');
    return {
        newFrase,
        divider,
        replaces,
        combinar

    }

}
console.log(procesarFrases(frases));