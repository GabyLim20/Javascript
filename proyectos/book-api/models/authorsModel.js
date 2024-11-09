const fs = require("fs");
const path = require("path");
const filePath = path.join(__dirname, "../data/authors.json");

const authorModel = {
    //Leer el archivo json y tomar los datos
    readAuthor: () =>{
        const data = fs.readFileSync(filePath);
        return JSON.parse(data);
    },
    writeAuthor: (author) =>{
        const jsonData = JSON.stringify(author, null,2);
        fs.writeFileSync(filePath,jsonData)
    }
}

module.exports = authorModel;