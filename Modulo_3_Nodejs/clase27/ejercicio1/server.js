const net = require("net");
const server = net.createServer((socket) =>{
    socket.setTimeout(10000);
    socket.on("timeout", () =>{
        console.log("Tiempo de espera alcanzado");
        socket.end();
    });
    console.log("Cliente conectado",socket.remoteAddress + " : " + socket.remotePort);
    socket.on("data", (data) =>{
        console.log("Mensaje del cliente" + socket.remoteAddress + " : " + socket.remotePort + data);

    });
    socket.on("error", (err) =>{
        console.log(err.message);
        
    });
    socket.on("end", () =>{
        console.log("El cliente se desconecto");
        
    });

});
server.listen(7000, () => {
    console.log("Escuchando en el puerto 7000");
    
});