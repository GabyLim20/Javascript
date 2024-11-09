const fs = require("fs");
fs.writeFile('archivo.txt', 'Soy Gabs tengo 23 años', (err) =>{
    if (err) {
        console.log('Hubo un error ', err);
        return;
    }
    console.log('Archivo guardado con exito');
    
});
fs.readFile('archivo.txt', 'utf8')