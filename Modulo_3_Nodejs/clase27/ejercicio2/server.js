const net = require("net");
const server = net.createServer((socket) =>{
    let clients = [];
    socket.on("data", (data) => {
        console.log("Cliente conectado", socket.remoteAddress + " : " + socket.remotePort + " ", data);
        clients.push(socket);
        
    });
    socket.on("error", (err) =>{
        console.log(err.message);
        
    });
    socket.on("end", () =>{
        console.log("El cliente se desconecto");
        
    });
});
server.listen(9000,()=>{ 
    console.log("Escuchando en el puerto 9000");
});