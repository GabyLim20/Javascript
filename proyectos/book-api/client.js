const net = require("net");
const readlineSync = require("readline-sync");

const client = new net.Socket();
function library() {
    console.log(`

      __...--~~~~~-._   _.-~~~~~--...__
    //               \`V'              \\ 
   //       Biblioteca Chonita          \\ 
  //__...--~~~~~~-._  |  _.-~~~~~~--...__\\ 
 //__.....----~~~~._\ | /_.~~~~----.....__\\
====================\\|//====================
  `);
}


function menu() {
    const options = ["Listado", "Agregar ", "Buscar "];

    console.log('Selecciona una opción:');
    //Usé keyInSelect para tener un menú más formal
    const index = readlineSync.keyInSelect(options, '¿Qué deseas hacer?');
    //Si  se selecciona el 0
    if (index === -1) {
        console.log('Se ha seleccionado 0. Saliendo...');
        client.destroy();
        return; // Salir 
    }
    //Inicializar el ciclo 
    switch (index) {
        case 0: // Listado
            console.log('Listado');
            client.write("1"); // Enviar al servidor la opción de "Listado"

            console.log('~~~ LISTADO ~~~');
            const mostrar = readlineSync.keyInSelect(["Libros", "Autores", "Editorial"], '¿Qué deseas ver?');
            const opciones = ["Libros", "Autores", "Editorial"];

            if (mostrar === -1) {
                console.log("Operación cancelada.");
                client.destroy();
                return;
            }

            client.write(opciones[mostrar]); // Enviar la opción seleccionada al servidor
            break;
        case 1:
            //Decidi hacerlo asi por que de la otra forma no me ejecutaba nada
            client.write("2")
            const add = readlineSync.keyInSelect(["Libro", "Autor", "Editorial", "Completo"], '¿Qué deseas agregar?');
            const optionAdd = ["Libro", "Autor", "Editorial", "Completo"];

            if (add === -1) {
                console.log("Operación cancelada.");
                client.destroy()
                return;
            }
            console.log(`Opción seleccionada: ${optionAdd[add]}`);
            client.write(optionAdd[add]); // Enviar la opción seleccionada al servidor

            const addTerm = readlineSync.question(`Introduce los datos de ${optionAdd[add]} para agregar\n recuerda que es en formato JSON:\n Libro: {"title":"Ejemplo", "genero": "Ciencia"}\n  Autor {"author":"Jose", "nationality": "Francia"}\n Editorial  {"publisher":"Ejemplo", "anio": "2020"}\n `);
            client.write(addTerm); // Enviar el término de búsqueda al servidor
            break;
        case 2:
            client.write("3")
            const search = readlineSync.keyInSelect(["Titulo", "Genero", "Autor", "Nacionalidad ", "Editorial", "Año"], '¿Qué deseas buscar?');
            const options = ["Titulo", "Genero", "Autor", "Nacionalidad", "Editorial", "Anio"];

            if (search === -1) {
                console.log("Operación cancelada.");
                return;
            }
            console.log(`Opción seleccionada: ${options[search]}`);
            client.write(options[search]); // Enviar la opción seleccionada al servidor

            const searchTerm = readlineSync.question(`Introduce el término de búsqueda para ${options[search]}: `);
            client.write(searchTerm); // Enviar el término de búsqueda al servidor
            break;
        case 3:
            if (readlineSync.keyInYNStrict('¿Estás seguro de que quieres salir?')) {
                console.log('Saliendo...');
                client.destroy();
                return;
            }
            break;
        default:
            console.log('Opción no válida.');
    }
}

// Conectar el cliente
client.connect(8080, "localhost", () => {
    console.log("Entrando a la biblioteca");
    library();
    menu(); // Mostrar el menú al conectar
});

// Mostrar la respuesta del servidor y volver a mostrar el menú
client.on("data", (data) => {
    console.log("El servidor dice:");
    console.log(data.toString()); // Mostrar datos que llegan del servidor
    // Mostrar el menú nuevamente después de recibir respuesta
    menu();
});

// Evento cuando se cierra la conexión
client.on("close", () => {
    console.log("Librería Chonita, vuelve pronto");
});
