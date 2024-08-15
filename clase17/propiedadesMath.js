//Math Pi
//Calcula la circunferencia de un dirculo dando su radio
let radio = 7;
let circunferencia = 2* Math.PI * radio;
console.log(circunferencia);
////Calcular el area de un circulo usando su radio
let radio2 = 7;
let area = Math.PI * Math.pow(radio2, 2)
console.log(area);
//Math.E
//Simula el crecimiento exponencial una inversión con interes compuesto
let principal = 1000; //cantidad principal
let tasa = 0.05;// tasa de interes anual
let tiempo = 5; //Tiempo en años
let monto = principal* Math.exp(tasa * tiempo)
console.log(monto);
//3 Math.LN2 Buscar el algoritmo natural de base2
let ln2 = Math.log(Math.E)/Math.LN2;
console.log(ln2);
//Math.LN10 Buscar el algoritmo en base 10
let ln10 = Math.log10(10) * Math.LN10;
console.log(ln10);

//Math.Log2E Buscar logaritmo en base 2 de 3
let l0g2E = Math.LOG2E;
console.log(l0g2E);

// Math.Log10e
let l0g10E = Math.LOG10E;
console.log(l0g10E);
//Math.SQRT" Calcular la raiz cuadrada de 2
let raiz2 = Math.SQRT2;
console.log(raiz2);
let raiz2_1 = Math.SQRT1_2;
console.log(raiz2_1);