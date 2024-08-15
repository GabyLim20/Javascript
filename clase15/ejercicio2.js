/*
Declara una variable que contenga una matriz de 5x5 llena de puros numeros enteros y positivos. Luego, escribe un algoritmo para sumar todos los numeros en la matriz.
*/
let suma = 0;
let matriz = [
    [5, 17, 23, 8, 14],
    [32, 4, 19, 27, 6],
    [13, 21, 35, 2, 18],
    [30, 7, 25, 11, 9],
    [22, 16, 3, 28, 20]
];

for (let i = 0; i< matriz.length; i++){
    for(let j = 0; j < matriz[i].length; j++ ) {
            suma += matriz[i][j];
    }
}
console.log(`La suma de la matriz es: ${suma}`);