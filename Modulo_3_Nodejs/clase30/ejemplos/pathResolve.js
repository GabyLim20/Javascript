const path = require("path");
// Resolucion de una ruta relativa desde el directorio actual
const resolvedPath = path.resolve("file.txt");
console.log("Ejemplo 1- Ruta resuelta desde el directorio actual:  ", resolvedPath);
//Resolución de multiples segmentos de ruta en una ruta

const resolvedPath2 = path.resolve("/home/user", "docs", "file.txt");
console.log("Ejemplo 2- Ruta resuelta con multiples segmentos:  ", resolvedPath2);

//Uso con rutas relativas que suben varios niveles
const resolvedPath3 = path.resolve("home/user/docs", "../images", "file.jpg");
console.log("Ejemplo 3- Ruta resuelta con navegación hacia arriba:  ", resolvedPath3);

