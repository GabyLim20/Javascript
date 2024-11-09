/*
Escribe una función "gestionarFloreria" que realice las siguientes tareas con una lista predefinida de nombres de flores:
1. Quite los espacios en blanco alrededor de cada flor.
2. Verifique si existe la flor "Margarita" y, si está presente, agregue
"Azucena" al final de la lista.
3. Reemplace todas las flores "Orquídea" por "Clavel".
  
4. Encuentre el índice de la flor "Girasol" y, si no está presente, agregue "Girasol" al inicio de la lista.
5. Devuelva una cadena de flores en orden alfabético separadas por puntos.
*/
let entradas = "Rosa, Tulipán, Orquídea, Lirio";
let eraser;
function gestionarFloreria(flor) {
    eraser = flor.map(producto => producto.replace(/, /g, ",")).join(", ");
    
    console.log(eraser); 
    
} 
gestionarFloreria(entradas)
