const { log } = require("console");
const net = require("net");
const readline = require("readline")
const PORT = 10000;
//Crear servidor

const server = net.createServer();
server.on("connection", (socket) =>{
    console.log("Cliente conectado");
    //Enviar un mensaje inicial al cliente
    socket.write('Bienvenidos al servidor TPC. Envia "status" para verificar el estado\n');
    //Manejar los datos recibidos del cliente
    socket.on("data", (data) =>{
        const message = data.toString().trim();
        console.log(`Mensaje Recibido del cliente + ${message}\n`);
        //Responder al cliente según el comando
        if (message == "status") {
            socket.write("El servidor esta en funcionamiento")
        } else{
            socket.write(`El servidor resibio: ${message}\n`)
        }
    });
    //Manejar el cierre de la conexión
    socket.on("end", () =>{
        console.log("El cliente se desconecto\n");
    });
    //Manejas errores   
    socket.on("error", (err) =>{
        console.log(`Error en el socket: ${err}\n`);   
    });
    //Enviar mensajes desde el servidor
    sendMessageFromServer(socket);
});
//Manejar errores del servidor
server.on("error", (err) =>{
    console.log(`Error en el servidor: ${err}\n`);   
});
//Iniciar el servidor
server.listen(PORT, ()=>{
    console.log(`El servidor escucha en el puerto ${PORT}`);
});
//Función para enviar mensajes desde el servidor

function sendMessageFromServer(socket) {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    })
    rl.setPrompt("Mensaje para el cliente: ");
    rl.prompt();
rl.on("line", (input) =>{
    if(input === "exit"){
        console.log("Servidor cerrado\n");
        rl.close();
        socket.end();
    } else{
        socket.write(input + "\n");
        rl.prompt();
    }
});
}