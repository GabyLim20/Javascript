let persona = {
    nombre: "Paula",
    edad: 25,
    pais: "Argentina"
};
//Claves del objeto 
const keys = Object.keys(persona);
console.log("Claves del objeto: ", keys);
//Valores del objeto
const values = Object.values(persona);
console.log("Valores del objeto" ,values);
//Convertir a un array de pares clave-valor
const entries = Object.entries(persona);
console.log("Array de pares clave-valor:", entries); 
// Crear un objeto a partir de pares clave-valor
const nuevoObjeto = Object.fromEntries(entries);
  console.log("Nuevo objeto creado:", nuevoObjeto); 