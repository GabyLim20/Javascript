/*
Declara una tupla para representar las coordenadas de un punto en el
plano (x, y).
2. Inicializa la tupla con los valores [10, 15].
3. Desestructura los valores de la tupla en dos variables: x e y.
4. Imprime por consola los valores de x e y.
*/
let plano: [number, number];
plano = [10,15];
// Desestructurar la tupla
let [x, y] = plano;
console.log(x); 
console.log(y); 