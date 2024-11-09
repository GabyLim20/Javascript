const path = require("path");

//Obtener el nombre del archivo desde una ruta absoluta
const fullPath = "/home/user/docs/file.txt"
const baseName1 = path.basename(fullPath);
console.log("Ejemplo 1- Nombre del archivo: ",baseName1);

//Obtener el nombre del archivo sin la extensión
const baseName2 = path.basename(fullPath, ".txt");
console.log("Ejemplo 2- Nombre del archivo sin la extensión: ", baseName2);
const relativePath = "src/utils/helpers.js"

//Uso con rutas relativas
const baseName3 = path.basename(relativePath);
console.log("Ejemplo 3- Nombre del archivo desde una ruta relativa: ", baseName3);
const dirPath = "var/www/html/"
//Obtener el nombre de un directorio
const baseName4 = path.basename(dirPath,);
console.log("Ejemplo 4- Nombre del directorio: ", baseName4);

//Rutas con separadores de Windows
const windowsPath = "C:\\Users\\Santiago\\Documents\\report.pdf";
const baseName5 = path.basename(windowsPath)
console.log("Ejemplo 5- Nombre del archivo en ruta de Windows: ", baseName5);