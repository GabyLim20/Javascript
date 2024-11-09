const path = require("path");
//Verificación de una ruta absoluta
const pathFile = "/home/user/docs/file.txt";
const isAbsolute = path.isAbsolute(pathFile);
console.log("Es una ruta absoluta?",isAbsolute);
