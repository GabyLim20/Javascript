//Metodos Array
let notas =[3, 5, 10, 9, 8, 8, 8];
//Push: Para agregar elementos a nuestro array
notas.push(1);
notas.push(2);
notas.push(4);

//Pop: Eliminar el ultimo elemento
//notas.pop();
let elUltimo = notas.pop();
console.log(elUltimo)
console.log(notas);

//Shift: Se eliimina el primer elemento
let deleteLast = notas.shift();
console.log(notas);
// Unshift: Agrega un elemento al principio 
let addLetter = notas.unshift(1);
console.log(notas);

let notas2 = [3, 5, 8, 10, 9, 7, 8, 8];
//IndexOf: Preguntar la posición en el array
let posicionOcho = notas2.indexOf(8);
console.log(posicionOcho);
// lastIndexOf: Preguntar la ult posicion el el array
let posicion8 = notas2.lastIndexOf(8)
console.log(posicion8);
// Importante: Cuando buscamos una posicion que no esta decuelve -1
let posicionInexistente = notas2.lastIndexOf(2)
console.log(posicionInexistente);
//Join: Nos junta todo y lo separa con una , por defecto
//Sin nada en parametros devuelve con ,
let resultadoJuntado = notas2.join();
console.log(resultadoJuntado);
//Con una coma y espacio
let resultadoJuntado2 = notas2.join(", ");
console.log(resultadoJuntado2);
//Con una coma y espacio
let resultadoJuntado3 = notas2.join("** ");
console.log(resultadoJuntado3);

// Includes: Buscar el elemento y devuelve true o false
let animales = ["perro", "gato", "raton "];
console.log(animales.includes("perro"));
