const path = require("path");
//Obtener el directorio contenedor de un archivo desde una ruta absoluta
const filePath = "/home/user/docs/file.txt";
const dirName1 = path.dirname(filePath);
console.log("Ejemplo 1- Directorio contenedor de file.txt", dirName1);

// Obtener el directorio de un archivo usando una ruta absoluta
const relativePath = "src/utils/helpers.js";
const dirName2 = path.dirname(relativePath);
console.log("Ejemplo 2- Directorio contenedor de helpers.js", dirName2);
//