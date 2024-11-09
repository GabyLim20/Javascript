const fs = require("fs");
const path = require("path");
const filePath = path.join(__dirname, "../data/publisher.json");

const publisherModel = {
    //Leer el archivo json y tomar los datos
    readPublisher: () =>{
        const data = fs.readFileSync(filePath);
        return JSON.parse(data);
    },
    writePublisher: (publisher) =>{
        const jsonData = JSON.stringify(publisher, null,2);
        fs.writeFileSync(filePath,jsonData)
    }
}

module.exports = publisherModel;