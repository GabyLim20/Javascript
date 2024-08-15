//Métodos Array (Avanzados)
let notas = [10, 4, 5, 8,9,2,7];
//Map: Crea un nuevo array con los resultados de la función aplicada a cada elemento
let notasHastaCien = notas.map(function(numero){
    return numero * 10;
});
console.log(notasHastaCien);
//Filter: Crea un nuevo array con los elementos que pasan la condicion especificada en una función de filtro
let notasAprobadas = notas.filter(function(num){
    
    return num >= 7;
});
console.log(notasAprobadas);
//Reduce : Reduce a un valor unico un arreglo
let suma = notas.reduce(function(acum, numero){
    return acum + numero;
})
let promedio = suma/notas.length
console.log(suma);
console.log(promedio);

// Foreach: Iterar sobre un arra (no retorna nada)
notas.forEach(function(valor, indice){
    console.log("En la posición " + indice + " tengo el valor: " + valor);
})
// Find: Encuentra el primer elemento en el array que cumple con la condición
let notaEncontrada = notas.find(function(numero){
    return numero >= 8
})
console.log("La primera nota mayor o igual a 8 es: " + notaEncontrada);
