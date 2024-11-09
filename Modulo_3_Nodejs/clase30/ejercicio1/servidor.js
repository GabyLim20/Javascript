const net = require("net");
const path = require("path")
const server = net.createServer((socket) =>{
    console.log("Clente conectado");
    socket.on("data", (data) =>{
        console.log("Mensaje del cliente: " + data.toString());
        const ruta = data.toString();
        const pathIs = path.isAbsolute(ruta);
        if (pathIs) {
            socket.write("Es una ruta absoluta");
        } else{
            socket.write("tu ruta no es absoluta"); 
        }
    });
    socket.on("close", () =>{
        console.log("Cliente desconectado");
    });
    socket.on("error", (err) =>{
        console.log("Error: ", err);
    });
});

server.listen(8080, () =>{
    console.log("El servidor está escribiendo en el puerto 8080.");
    
});
