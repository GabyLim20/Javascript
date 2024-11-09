const path = require("path");
//Normalizacion de una ruta con barras redundantesy puntos de navegación
const path1 = "home/user//docs/./file.txt";
const ejemplo1 = path.normalize(path1);
console.log("Ejemplo1 - Ruta normalizada:",ejemplo1);

//Normalizacion de una ruta con muchos puntos de navegación

const path2 = "/home/./user/docs/../../file.txt"
const ejemplo2 = path.normalize(path2);
console.log("Ejemplo1 - Ruta normalizada que contenia puntos de nav:",ejemplo2);

