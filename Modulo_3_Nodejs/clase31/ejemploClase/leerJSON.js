//Importamos el modulo fs
const fs = require("fs");
//Leer archivo JSON, Leemos el archivo y convertimos en un objeto js

fs.readFile("persona.json", "utf-8", (err,data) =>{
    if (err) {
        console.log("Error al leer el archivo JSON: ", err);
        return;
    }
    // Mostrar el contenido leído como texto
    console.log("Contenido del archivo JSON (como texto)");
    console.log(data);
    //Convertir cadena JSON en un objeto js
    const persona = JSON.parse(data)
    //Mostrar el objeto js convertido
    console.log("JSON convertido a objeto js");
    console.log(persona);

    //Acceder a los valores del objeto js
    console.log("Accediendo a los valores del objeto");      
    console.log("Nombre:", persona.nombre);
    console.log("Ciudad:", persona.direccion.ciudad);
  
    //Modificar el objeto y convertirlo nuevamente a JSON
    persona.edad = 25;
    //Convertimos el objeto js a JSON
    const nuevoJSon = JSON.stringify(persona,null,2);
    //null y 2 para formatear el json con identacion
    //Guardar el json modificado en un nuevo archivo
    fs.writeFile ("nuevaPersona.json", nuevoJSon, (err) => {
        if(err){
            console.log("Error al escribir el archivo", err);
            return
        }
        console.log("Json modificado guardado en nuevaPersona.json");
        
    });
})