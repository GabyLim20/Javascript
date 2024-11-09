const fs = require('fs');
fs.watch('archivo.txt', (eventType, filename) =>{
    if (filename) {
        console.log(`${filename} ha sido modificado. Evento ${eventType}`);
    }
});