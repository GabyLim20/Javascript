let mensaje = "Gran día para practicar Javascript! "; 
// Ejemplo de lenght: Contabiliza la cantidad de caracteres
console.log(mensaje.length);

// Ejemplo de IndexOf: Me duce la posicion especifica // Es sensible a los acentos y may (sensible case)
console.log(mensaje.indexOf("día"));
console.log(mensaje.indexOf("noche"));

// Slice: Hacer un recorte
console.log(mensaje.slice(0,24));
// trim: Elimina los espacios al principio y al final
let mensaje2 = "        Gran día para practicar Javascript! "; 
console.log(mensaje2);
console.log(mensaje2.trim());

// Split: Convierte en array. No se ejecuta en variable que no  //  Separa por palabra
let mensaje3 = "Gran día para practicar Javascript! "; 
console.log(mensaje3.split());
console.log(mensaje3.split(" "));

//Replace Reemplazar cadenas de texto
let mensaje4 = "Gran día para practicar Javascript! "; 
console.log(mensaje4.replace("Javascript", "lectura"));


