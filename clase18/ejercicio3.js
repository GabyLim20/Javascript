/*
A partir del siguiente array de productos, escriba la función ‘gestionarProductos’ que realice las siguientes tareas:
1. Añada un nuevo producto al array.
2. Elimine el último producto del array.
3. Encuentre el índice de un producto específico. En este punto
pueden usar forEach o investigar el método “findIndex()” https://developer.mozilla.org/en- US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
4. Verifique si existe un producto con precio mayor a 50. Para esto investigar el método “.some()” https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Glo bal_Objects/Array/some
5. Devuelva una cadena de nombres de productos separados por comas.

*/

let productos = [
    {nombre: "Alfajores", precio: 30},
    {nombre: "Chocolate", precio: 50},
    {nombre: "Chupetines", precio: 70},
    {nombre: "Caramelos", precio: 20},
    {nombre: "Bombones", precio: 20},
]
let search = "Chocolate";
let gestionarProductos = (productos) =>{
    productos.push({nombre: "Tamarindo", precio: 15});
    let elimina = productos.pop();
    let encontrar = productos.findIndex(producto => producto.nombre === search);
    let mayor = productos.some(producto => producto.precio > 50);
    let newProduct = productos.map(producto => producto.nombre).join(", ");

    return {
        elimina,
        Posición:  encontrar,
        mayor,
        Lista: newProduct,
        }

}
console.log(gestionarProductos(productos));