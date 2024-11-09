const net = require("net");
const readline = require("readline-sync");
let client;
function createClient(id) {
    client = net.createConnection({ port: 9000, host: "127.0.0.1"
    });
    client.on("connect", () =>{
        console.log(`Conexión del usuario ${id} exitosa al server`);
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
}
function sendMessage() {
    const message = readline.question("\nEscribe algo\n");
    if(message == "0"){
        client.end()
    }else{
        client.write(message)
    }
}
for (let index = 0; index <2; index++) {
    createClient(index)
    
}