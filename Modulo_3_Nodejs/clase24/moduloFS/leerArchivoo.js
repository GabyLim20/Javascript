const fs = require("fs");
fs.readFile('archivo.txt', 'utf8', (error, data) =>{
    if(error){
        console.log("Error al leer el archivo", error);
        return;
    }
    console.log("El contenido es: ", data);
    
})