const path = require("path");
//Obtener laa extension de un archivo de una ruta absoluta 
const filePath = "/home/user/docs/file.txt";
const extName = path.extname(filePath);
console.log("Ejemplo 1- Extensión de archivo", extName);
//Manejo de archivos sin extensión
const noExtPath = "/home/user/docs/README";
const extName2 = path.extname(noExtPath);
console.log("Ejemplo 2- Extensión del archivo sin extensión", extName2);
//Rutas con multiples puntos en el nombre del archivo
const multPath = "images/photo.large.jpg";
const extName3 = path.extname(multPath);
console.log("Ejemplo 3- Extensión del archivo con muchos puntos", extName3);