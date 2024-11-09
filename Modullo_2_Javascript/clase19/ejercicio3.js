//Escribir un programa que muestre la sumatoria de todos los números entre el 0 y el 100.
//Ejercicio 3
function suma() {
    let suma = 0;
    for (let i = 0; i<=100; i++){
        suma += i;
    }
    return suma;
}
console.log(suma());