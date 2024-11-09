const net = require("net");
const {v1: uuid1,v3: uuid3, v4: uuid4, v5: uuid5 } = require("uuid");
const NAMESPACE = uuid3.URL;
const server = net.createServer((socket) =>{
    const idv1 = uuid1();
    const idv3 = uuid3("usuario", NAMESPACE);
    const idv4 = uuid4();
    const idv5 = uuid5("usuario", NAMESPACE);
    console.log("Conexión establecida: ");
    console.log("UUID1: ", idv1);
    console.log("UUID3: ", idv3);
    console.log("UUID4: ", idv4);
    console.log("UUID5: ", idv5);

    socket.on("data",(data) =>{
        console.log(`Datos recibidos: ${data}`); 
    });
    socket.on("error", (err) =>{
        console.log("Error: ", err);
    });
    socket.on("end", () =>{
        console.log("Conexión Finalizada");
    });
});
server.listen(8080, () => {
    console.log("Escuchando en el 8080");
    
})