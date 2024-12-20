const path = require("path");
//Ejemplo 1: Uniendo segmentos de rutas simples
const ejemplo1 = path.join('/user', 'local', 'bin');
console.log("Ejemplo 1 - Ruta combinada: ", ejemplo1);

//Ejemplo2 Eliminación de barras redundantes
const example2= path.join('/user', '/local', 'bin/');
console.log("Ejemplo 2- Ruta normalizada sin barras reduncantes: ", example2);

//Ejemplo 3: Normalizando rutas con ".."(subir dicrectorio)
const example3 = path.join('/user', 'local', '..','bin');
console.log("Ejemplo 3- Ruta normalizada con '..' : ", example3);

//Ejemplo 4: Construcción de una ruta relativa multiplataforma
const example4 = path.join("docs", "projects", "index.html");
console.log("Ejemplo 4- Ruta relativa: ", example4);
