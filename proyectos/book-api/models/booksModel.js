const fs = require("fs");
const path = require("path");
const filePath = path.join(__dirname, "../data/book.json");
//const response = require("../views/responseView");

const bookModel = {
    //Leer el archivo json y tomar los datos
    readBook: () =>{
        const data = fs.readFileSync(filePath);
        return JSON.parse(data);
    },
    writeBook: (books) =>{
        const jsonData = JSON.stringify(books, null,2);
        fs.writeFileSync(filePath,jsonData)
    }
}

module.exports = bookModel;