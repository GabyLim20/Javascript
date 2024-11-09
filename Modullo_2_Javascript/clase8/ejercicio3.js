const prompt = require('prompt-sync')({sigint:true});

let condicion1 = prompt("Ingresa la primera condición true/false ") === "true";
let condicion2 = prompt("Ingresa la segunda condición true/false ")=== "true";

console.log(`condicion 1 and condicion 2 ${condicion1 && condicion2}`);
console.log("condicion1 or condicion2 = " + condicion1 || condicion2);
console.log("not condicion1 " + !condicion1)
console.log("not condicion2 " + !condicion2)
