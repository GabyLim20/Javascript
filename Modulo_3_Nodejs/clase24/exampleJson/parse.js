// Recibe JSON y cambia a JS
//Cadena json recibida del servidor
let jsonString = '{"nombre": "Gabs", "edad": "23"}';
//convertir la cadena Json a un objeto JS
let cadena = JSON.parse(jsonString);
console.log(cadena);
console.log(cadena.nombre);


