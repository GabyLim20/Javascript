const net = require('net');

const server = net.createServer();

server.on("connection", (socket) =>{
    socket.on("data", (data) =>{
        console.log("\nEl cliente" + socket.remoteAddress + "con el puerto " + socket.remotePort + " dice " + data);   
        socket.write("Mensaje Recibido")
    });
    server.on("close", ()=>{
        console.log("Comunicación finalizada");
        
    });
    server.on("error", (err) => {
        console.log(err.message);
    });
});
server.listen(5000, () =>{
    console.log("El servidor esta escuchando; ", server.address().port);
    
});