const net = require("net");
const path = require("path");
const server = net.createServer((socket) =>{
    console.log("Clente conectado");
    socket.on("data", (data) =>{
        console.log("Mensaje del cliente: " + data.toString());
        const ruta = data.toString();
        const pathN = path.normalize(ruta);
        socket.write("La ruta normalizada es" + pathN);

    });
    socket.on("close", () =>{
        console.log("Cliente desconectado");
    });
    socket.on("error", (err) =>{
        console.log("Error: ", err);
    });
});

server.listen(8081, () =>{
    console.log("El servidor está escribiendo en el puerto 8081.");
    
});
