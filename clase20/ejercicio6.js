/*
Usar la función map para crear un nuevo array donde cada frase empiece y termine con signo de exclamación.
*/
const frase = ["Labore sea dolor.", "Justo rebum dolor", "Stet lorem amet"];

let frasesExclamadas;
frasesExclamadas = frase.map(exclamacion => `!${exclamacion}!`)

console.log(frase);
console.log(frasesExclamadas);