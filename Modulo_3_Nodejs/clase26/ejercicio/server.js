const net = require("net");
const server = net.createServer((socket) =>{
  console.log("Cliente conectado", socket.remoteAddress + ":" + socket.remotePort);

  socket.on("data",(data) =>{
    console.log("Mensaje del cliente" + socket.remoteAddress + ": " + socket.remotePort + data.toString());
    socket.write("Mensaje recibido");//Le envia la respuesta del cliente
    
  });
  socket.on("close",() =>{
    console.log("Cliente desconectado");
  });
  socket.on("error",(err) =>{
    console.log("Error; ", err.message);
  });

});
server.listen(5000, () =>{
  console.log("Escuchando en el puerto 5000");
});