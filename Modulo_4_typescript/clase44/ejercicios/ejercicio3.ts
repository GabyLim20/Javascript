/*Actividad 3: Crear una función genérica
Crea una función genérica que tome un parámetro de cualquier tipo y lo
devuelva. Prueba la función con diferentes tipos de datos.*/
function generic<T> (value: T){
    return value
    
}
console.log(generic<string>('Hola como estas'));
console.log(generic<number>(20));
console.log(generic<boolean>(true));