const net = require("net");
const readline = require("readline-sync");
//Configuracion de conexión
const options ={
    port: 5000,
    host: "127.0.0.1"
};
//Crear conexion TCP al servidor
const rl = readline.createConnection({
    input: process.stdin,
    output: process.stdout
})

//Obtener el nombre del usuario desde los argumentos de linea de comando(si no hay se pone "unknonw")
const UserName = process.argv[2].split("=")[1] || 'Unknow';

//Funcion para manejar la entrada del usuario
const handleInput = () =>{
    rl.question('client -> ', (clientMsg) =>{
        clientTCP.write(clientMsg);
        handleInput();
    });
};
//Manejar la conexión del cliente
clientTC.on("connect", () =>{
    console.log("Conexión exitosa con el servidor");
    handleInput();
});
//Manejar la data 
clientTC.on("data", (data) =>{
    const serverMsg = data.toString()
    console.log("Server -> ", serverMsg);
    handleInput();
});
//Manejr cierre
clientTC.on("end", () =>{
    console.log("El cliente ha cerrado la fun");
}); 
//Manejr error
clientTC.on("error", (err) =>{
    console.log(`Error de conexión: `, err);
    rl.close();
}); 


const client = net.createConnection(options);
client.on("connect", () =>{
    console.log("Conexión exitosa al server");
    sendMessage();
})

client.on("data", (data) =>{
    console.log("El servidor dice: " + data.toString());
    sendMessage();
});
client.on("end", () =>{
    console.log("Cliente desconectado");
    
})

client.on("error",(err) =>{
    console.log(err.message);
    
});

function sendMessage() {
    var line = readline.question("\nEscribe algo\n");
    if(line == "0"){
        console.log("\n Desconectado");
        
        client.end();
    }else{
        client.write(line);
    }
}