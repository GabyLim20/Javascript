const net = require("net");
const { v4: uuidv4 } = require("uuid");
const bookController = require("./controllers/booksController");
const authorController = require("./controllers/authorsController");
const publisherController = require("./controllers/publisherController");
const completeBookController = require("./controllers/completeBookController");
const PORT = 8080;
function isValid(str) {
    return str.startsWith("{") && str.endsWith("}");
}
const server = net.createServer((socket) => {
    console.log("Cliente conectado");

    socket.on("data", (data) => {
        const command = data.toString().trim();

        switch (command) {
            case "1": // Listado seleccionado
                console.log("Sí jalo...");
                
                socket.once("data", (subCommand) => {
                    const subOption = subCommand.toString().trim();
                    console.log(`Subcomando recibido: ${subOption}`);
                    if (subOption === -1) {
                        console.log('Regresando al ...');
                        client.destroy();
                        return; // Salir 
                    }
                    //Mostrar el listado con su respuctivo caso
                    switch (subOption) {
                        case "Libros":
                            const booksResponse = bookController.getBooks();
                            socket.write(booksResponse);
                            break;
                        case "Autores":
                            const authorsResponse = authorController.getAuthor();
                            socket.write(authorsResponse);
                            break;
                        case "Editorial":
                            const publishersResponse = publisherController.getPublisher();
                            socket.write(publishersResponse);
                            break;
                        case "Completo":
                            const combinedResponse = completeBookController.getComplete();
                            socket.write(JSON.stringify(combinedResponse)); // Convertir el array a una cadena JSON
                            break;
                        default:
                            socket.write("Opción no válida en el submenú.\n");
                            break;
                    }
                });
                break;
                case "2":
                    console.log("Comando de agregar recibido");
                    
                    socket.once("data", (subCommand) => {
                        const option = subCommand.toString().trim();
                        console.log(`Opción recibida: ${option}`);
                    
                        // Escuchar el siguiente mensaje
                        socket.once("data", (add) => {
                            const jsonData = add.toString().trim();
                            console.log(`Datos recibidos: ${jsonData}`);
                    
                            let response; // Variable para almacenar la respuesta de todos los casos
                    
                            if (isValid(jsonData)) {
                                // Verificar que los datos recibidos sean un JSON válido
                                const data = JSON.parse(jsonData);
                                
                                if (typeof data === "object") {
                                    const newData = { id: uuidv4(), ...data };
                                    console.log("Datos con ID:", newData);
                                    
                                    switch (option) {
                                        case "Libro":
                                            response = bookController.addBooks(newData);
                                            break;
                                        case "Autor":
                                            response = authorController.addAuthors(newData); 
                                            break;
                                        case "Editorial":
                                            response = publisherController.addPublisher(newData); 
                                            break;  
                                        case "Completo":
                                            response = completeBookController.addComplete(newData);
                                        default:
                                            response = 'Opción no válida en el submenú.\n';
                                    }
                                } else {
                                    response = "Datos no válidos.\n";
                                }
                            } else {
                                response = "Formato JSON no válido.\n";
                            }
                    
                            socket.write(JSON.stringify(response) + "\n"); // Enviar la respuesta al cliente
                        });
                    });
                    break;
            case "3":
                // Recibe el siguiente submenu
                socket.once("data", (subCommand) => {
                    const option = subCommand.toString().trim();
                    //Verificamos que llegó
                    console.log(`Opción recibida: ${option}`);

                    // Escuchar el siguiente mensaje para ahora si tener el metodo de búsqueda
                    socket.once("data", (searchTerm) => {
                        const term = searchTerm.toString().trim();
                        console.log(`Entro en: ${term}`); 
                        let response; //Cree esta variable para poder reutilizarla en los caso 
                        switch (option) {
                            case "Titulo":
                                response = bookController.searchByTitle(term); // Almacenar la respuesta
                                break;
                            case "Genero":
                                response = bookController.searchByGender(term);
                                break;
                            case "Autor":
                                response = authorController.searchByAuthor(term);
                                break;
                            case "Nacionalidad":
                                response = authorController.searchByNationality(term);
                                break;
                            case "Editorial":
                                response = publisherController.searchByPublisher(term);
                                break;
                            case "Anio":
                                response = publisherController.searchByYearPublisher(term);
                                break;    
                            default:
                                socket.write('Opción no válida en el submenú.\n');
                                socket.end();
                                return;
                        }
                        //Verificamos si se encontro, esta es más que nada para que no salga el undefined
                        if (response) {
                            socket.write(JSON.stringify(response) + "\n"); // Enviar el libro encontrado
                        } else {
                            socket.write("No se encontró ningún libro con esa busqueda.\n"); 
                        }                    
                    });
                });

                break;
        }
    });
    // Cuando el cliente se desconecta

    socket.on("end", () => {
        console.log("Cliente desconectado");
    });
        // Manejo de errores

    socket.on("error", (err) => {
        console.log("Error", err);

    })
});
// Manejo de errores del servidor

server.on("error", (err) => {
    console.log("Error", err);

})
//Iniciar el puerto
server.listen(PORT, () => {
    console.log("Servidor escuchando en el puerto 8080");
});
