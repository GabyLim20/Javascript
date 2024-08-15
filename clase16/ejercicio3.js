/*
Nos dejaron un array con las vueltas que dio una corredora entrenando en distintos momentos para una maratón.Nuestro desafío será crear la variable totalVueltas y almacenar en ella el total, usando el método reduce.
Además de hacer esto, deberemos realizar las siguientes operaciones:

Añadir una vuelta al principio del array: Usamos unshift para agregar la vuelta 7 al principio del array vueltas.
Eliminar la última vuelta del array: Usamos pop para eliminar la última vuelta del array y guardarla en la variable ultimaVuelta.
Verificar si la vuelta 10 está en el array y agregarla al final si no está presente: Usamos includes para verificar si la vuelta 10 está en el array y push para agregarla al final si no está.
Eliminar la primera vuelta del array: Usamos shift para eliminar la primera vuelta del array y guardarla en la variable primeraVuelta.
Verificar si la vuelta 15 está en el array y agregarla al principio si no está presente: Usamos includes para verificar si la vuelta 15 está en el array y unshift para agregarla al principio si no está.
Calcular el nuevo total de vueltas usando reduce: Después de todas las operaciones, recalculamos el total de vueltas utilizando reduce.

*/

let vueltas = [5,8,12,3,22];
let totalVueltas = vueltas.reduce(function(acum, numero){
    return acum + numero;
})
console.log("Punto 1: " + totalVueltas);
vueltas.unshift(7);
console.log("Punto 2: " + vueltas);

let ultimaVuelta = vueltas.pop()

console.log("Punto 3: " + ultimaVuelta);

if(vueltas.includes(10)){
    console.log("Punto 4: La vuelta 10 esta en el array");
}else{
    vueltas.push(10)
    console.log("Punto 4: " + vueltas);
}
let primeraVuelta = vueltas.shift()
console.log("Punto 5: " + primeraVuelta);
if(vueltas.includes(15)){
    console.log("Punto 6: La vuelta 15 esta en el array");
}else{
    vueltas.unshift(15)
    console.log("Punto 6: " + vueltas);
}
let nuevoTotalVueltas = vueltas.reduce(function(acum, numero){
    return acum + numero;
})
console.log("Punto 7: " + nuevoTotalVueltas);


