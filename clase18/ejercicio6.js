/*
Escribe una función "gestionarAutos" que realice las siguientes tareas con
una lista predefinida de marcas de autos:
1. Quite los espacios en blanco alrededor de cada marca.
2. Verifique si existe la marca "Tesla".
3. Reemplace todas las marcas "Ford" por "BMW".
4. Encuentre el índice de la marca "Chevrolet".
5. Devuelva una cadena de marcas en orden alfabético separadas por puntos. Utilizar “.sort()”
*/
let entradas = "Toyota, Honda, Ford, Chevrolet, Nissan";
function gestionarAutos(auto) {
    let quitar = auto.replace(/, /g, ",").trim(); // Si le pongo join en vez de trim me dice que no es una función
    console.log(quitar)
    if (auto.includes("Tesla")) {
        console.log("La marca Tesla existe en la lista.");
    } else {
        console.log("La marca Tesla no existe en la lista.");
    }
    //let verificar = auto.some(auto=>auto == "Tesla") //ASI NO JALA

    auto = auto.replace(/Ford/g, "BMW");
    console.log(auto);
    let indice = auto.indexOf("Chevrolet");

    console.log(auto);
    console.log("Chevrolet esta en el indice: " + indice);
    //let ordenar = auto.sort().join(".") //ERROR

}
gestionarAutos(entradas)