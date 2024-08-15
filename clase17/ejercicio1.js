/*
¿Cuál es la posición del número 1?
¿Cuál es la posición del número 5?
¿Cuál es la posición del número 6?
¿Cuál es la posición del número 9?
¿Cuál es la posición del número 11?
*/
let lista = [1,2,3,4,5,6,7,8,9,10,11];
const binarySearch  =(list, item) => {

let low = 0;
let high =list.length - 1;
while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    const guess = list[mid];
    if (guess === item) {
        return mid;
    }
    if (guess > item) {
        high = mid - 1;
    } else {
        low = mid + 1;
    }
    }
return null; 
}

console.log(binarySearch(lista, 1));
console.log(binarySearch(lista, 5));
console.log(binarySearch(lista, 6));
console.log(binarySearch(lista, 9));
console.log(binarySearch(lista, 11));