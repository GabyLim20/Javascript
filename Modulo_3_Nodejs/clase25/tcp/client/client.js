const net = require("net");
const readline = require("readline-sync");
const options ={
    port: 5000,
    host: "127.0.0.1"
};
const client = net.createConnection(options);
client.on("connect",()=>{
    console.log("Conexión Satisfactoria");
    sendLine();
});
client.on("data", (data)=>{
    console.log("Respuesta del servidor: " + data);
    sendLine();
});
client.on("error", (err)=>{
    console.log(err.message);
});
function sendLine() {
    var line = readline.question("\nEscribe algo\n");
    if(line == "0"){
        client.end();
    }else{
        client.write(line);
    }
}
