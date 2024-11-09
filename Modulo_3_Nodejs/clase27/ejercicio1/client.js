const net = require("net");
const readline = require("readline-sync");
const client = net.createConnection({ port: 7000, host: 'localhost'
});

client.on("connect", () =>{
    console.log("Conexión exitosa al server");
    sendMessage();
});
client.on("data", (data) =>{
    console.log("Respuesta del servidor: " + data);
    client.end()
    
});

client.on("error",(err) =>{
    console.log(err.message);
    
});
client.on("end", () =>{
    console.log("cliente desconectado");
    
});
function sendMessage() {
    const message = readline.question("\nEscribe algo\n");
    if(message == "0"){
        client.end()
    }else{
        client.write(message)
    }
}