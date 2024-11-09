const booksModel = require("../models/booksModel");
const authorModel = require("../models/authorsModel");
const publisherModel = require("../models/publisherModel");
const response = require("../views/responseView");
const completeBookController = {
    //Metodo para obtener libro,autor y editorial en un mismo  objeto

    addComplete: (addBook, addAuthor, addPublisher) =>{
        const books = booksModel.readBook();
        const authors = authorModel.readAuthor();
        const publishers = publisherModel.readPublisher();
        books.push(addBook);
        booksModel.writeBook(books);
        authors.push(addAuthor);
        authorModel.writeAuthor(authors);
        publishers.push(addPublisher);
        publisherModel.writePublisher(publishers);
        console.log("Añadido exitosamente");
        
    }
}

module.exports = completeBookController;
