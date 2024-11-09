//En este caso se usa var ya que es global 
var fs = require('fs');
datos = "Ejemplo de datos que podemos escribir en un archivo";

fs.writeFile('archivo.txt', datos,function(err){
    if(!err){
        console.log("Los datos han sido escritos en el archivo.txt");
    } else{
        throw err; //Se utiliza para mandar una excepción 
    }
})