const fs = require("fs");
fs.mkdir('newFile', (err)=>{
    if (err) {
        console.log('Error al crear la carpeta', err);
        return;
    }
    console.log("Carpeta creada");
    
});
fs.readdir('.',(err, files) =>{
    if (err) {
        console.log('Error al leer la carpeta', err);
        return;
    }
    console.log("Contenido del directorio ", files);
});