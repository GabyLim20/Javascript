/*1. Mueblería: Actualización de Precios
En una mueblería, se requiere un sistema que permita actualizar los precios de
los muebles cada vez que cambien. Cada mueble tiene un nombre, un precio y
un identificador único. Implementa las siguientes funciones:
• Añadir un nuevo mueble.
• Actualizar el precio de un mueble después de 3 segundos utilizando
setTimeout().
• Mostrar el inventario de muebles.*/
// Definimos la tupla para el mueble
type Mueble = [number, string, number]; 

let inventario: Mueble[] = [];

function agregarMueble(id: number, nombre: string, precio: number) {
    const nuevoMueble: Mueble = [id, nombre, precio];
    inventario.push(nuevoMueble);
    console.log(`Mueble ${nombre} añadido con éxito.`);
}


function mostrarInventario() {
    console.log("Inventario de la Mueblería:");
    inventario.forEach(mueble => {
        const [id, nombre, precio] = mueble;
        console.log(`ID: ${id}, Nombre: ${nombre}, Precio: $${precio}`);
    });
}

function actualizarPrecio(id: number, nuevoPrecio: number) {
    setTimeout(() => {
        const mueble = inventario.find(m => m[0] === id);
        if (mueble) {
            mueble[2] = nuevoPrecio; // Actualizar el precio
            console.log(`El precio del mueble ${mueble[1]} se ha actualizado a $${nuevoPrecio}.`);
        } else {
            console.log("Mueble no encontrado.");
        }
    }, 3000);
}

agregarMueble(1, "Escritorio", 2000);
agregarMueble(2, "Banco", 1500);

mostrarInventario();

actualizarPrecio(1, 350);