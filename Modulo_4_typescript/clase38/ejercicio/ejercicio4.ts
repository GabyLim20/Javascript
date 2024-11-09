/*
Declara dos variables, una para almacenar un nombre y otra para almacenar una edad. Si la edad no se asigna, debes imprimir un mensaje que diga "Edad no proporcionada". Si se asigna la edad, imprímela junto al nombre.
*/
let nameG : string = "Gaby";
let yearG : number | undefined;

if (yearG !== undefined) {
  console.log(`${nameG} tiene ${yearG} años.`);
} else {
  console.log(`${nameG} no ha proporcionado su edad.`);
}