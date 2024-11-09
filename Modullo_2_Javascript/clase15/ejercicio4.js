/*
Se está realizando el desarrollo de una aplicación para control de gastos. Cada día, el usuario ingresa sus gastos cotidianos.
La idea es solo registrar el total de los gastos, al finalizar la jornada. Para simplificar, vamos a considerar que todos los meses tienen cuatro semanas.
Los gastos estarán en una matriz de 4x7, cada fila representa una semana y cada columna un día. Es decir fila 0, semana 1, fila 1, semana 2, etc. Columna 0, dia 1, columna 1, dia 2, etcétera.

 Lo que nos solicitan es dar el total de gastos en una semana. Recordemos que cada fila representa una semana, es decir, si nos indican semana 2 tenemos que sumar la fila 1 de la matriz. Recordar que las matrices comienzan siempre en posición 0.
b) La aplicación también tendrá una parte de estadísticas, para esto nos solicitan dar el total de un día en particular, por ejemplo del día
3, acá también tengamos en cuenta lo que ocurre con las filas, ya
que las columnas también comienzan en 0.
c) Por último, es necesario tener el total de gastos realizados en el
mes.
✓ Pregunta para pensar, ¿es lo mismo recorrer por filas o por
columnas para resolver este último punto?
d) Obtener cuál fue la semana que más gastos se realizaron. Indicar el día que más gastos se realizaron.
*/
const prompt = require('prompt-sync')();
let matrizMadre = [];

let addMatriz = (matriz) =>{
    let matrizS = []
    for (let i = 0; i< 4; i++){
        console.log(`En la semana ${(i+1)}`);
        for(let j = 0; j < 7; j++ ) {
            console.log(` `);
            let resultado =  parseFloat(prompt(`el día ${(j+1)} ¿Cuál es tu gasto? `));
            matrizS.push(resultado)
                  
        }
          matriz.push(matrizS)   
    }
    return matriz
}

let totalSemana = (matriz, semana) =>{
    let suma = 0;
    for (let i = 0; i< matriz.length; i++){
        for(let j = 0; j < 7; j++ ) {
            if((semana -1) == i){
                suma += matriz[i][j];
            }
        }
    }
    return suma
}

let totalDía = (matriz, dia) =>{
    let suma = 0;
    for (let i = 0; i < 4; i++) {
        suma += matriz[i][dia - 1];
    }
    return suma;
}

let total = (matriz) =>{
    let suma = 0;
    for (let i = 0; i< matriz.length; i++){
        for(let j = 0; j < matriz[i].length; j++ ) {
                suma += matriz[i][j];
        }
    }
    return suma
}
let mayorGasto = (matriz) =>{
    let mayor = 0;
    let semana = 0;
    let dia = 0;
    let mayorDia = 0;
    for (let i = 0; i < matriz.length; i++) {
        let suma = 0;  
        for (let j = 0; j < matriz[i].length; j++) {
            suma += matriz[i][j];
            if(matriz[i][j]>dia){
                mayorDia = matriz[i][j];
                dia = j+1;
            }
        }
        if (suma > mayor) {
            mayor = suma;
            semana = i + 1;  
        }
    }
    return  {semana, dia};
}


console.log(addMatriz(matrizMadre));
let resultadoSemana = totalSemana(matrizMadre,parseInt(prompt("¿Qué semana deseas ver sus gastos? ")));


let resultadoDía = totalDía(matrizMadre,parseInt(prompt("¿Qué día deseas ver sus gastos? ")));

console.log(`El total de la semana es: ${resultadoSemana}`);

console.log(`El total del día es: ${resultadoDía}`);

console.log("El total del mes es " + total(matrizMadre));
const resultado = mayorGasto(matrizMadre);
console.log(`La semana con más gastos es la semana ${resultado.semana}.`);
console.log(`El día con más gastos en toda la matriz es el día ${resultado.dia}.`);