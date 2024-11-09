//Manejar la logica 
//Obtener y añadir libros,
const authorsModel = require("../models/authorsModel");
const response = require("../views/responseView");


const authorController = {
    //Metodo para obtener los libros
    getAuthor : () =>{
        const authors = authorsModel.readAuthor();
        return response.formatResponse(authors);
    },
    //Metodo para añadir un libro
    addAuthors: (addAuthor) =>{
        const authors = authorsModel.readAuthor();
        authors.push(addAuthor);
        authorsModel.writeAuthor(authors);
        console.log("Añadido exitosamente");    },
    //Metodo de busqueda por medio del autor
    searchByAuthor:(nameAuthor) =>{
        const list = authorsModel.readAuthor();
        const foundAuthor = list.filter(autor => autor.author.trim().toLowerCase() === nameAuthor.trim().toLowerCase());
        return foundAuthor;
    },
    //Metodo de busqueda dependiendo la nacionalidad
    searchByNationality:(nationalityAuthor) =>{
        const list = authorsModel.readAuthor();
        const foundNationality = list.filter(national => national.nationality.trim().toLowerCase() === nationalityAuthor.trim().toLowerCase());
        return foundNationality;
    },
};
module.exports = authorController;