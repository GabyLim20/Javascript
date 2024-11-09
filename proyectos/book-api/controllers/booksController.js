const booksModel = require("../models/booksModel");
const response = require("../views/responseView");


const bookController = {
    //Metodo para obtener los libros
    getBooks : () =>{
        const books = booksModel.readBook();
        return response.formatResponse(books);
    },
    //Metodo para añadir un libro
    
    addBooks: (addBook) =>{
        const books = booksModel.readBook();
        books.push(addBook);
        booksModel.writeBook(books);
        console.log("Añadido exitosamente");
    },
    //Metodo para buscar un libro por el titulo
    searchByTitle:(titleBook) =>{
        const list = booksModel.readBook();
        const foundTitle = list.find(book => book.title.trim().toLowerCase() === titleBook.trim().toLowerCase());
        return foundTitle;
    },
        //Metodo para buscar un libro por el genero
    searchByGender:(genderBook) =>{
        const list = booksModel.readBook();
        const foundTitles = list.filter(book => 
            book && book.gender && book.gender.trim().toLowerCase() === genderBook.trim().toLowerCase()
        );
        return foundTitles;
    }
};
module.exports = bookController;