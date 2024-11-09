//Manejar la logica 
//Obtener y añadir libros,
const publisherModel = require("../models/publisherModel");
const response = require("../views/responseView");


const publisherController = {
    //Metodo para obtener los libros
    getPublisher : () =>{
        const publisher = publisherModel.readPublisher();
        return response.formatResponse(publisher);
    },
    //Metodo para añadir un libro
    addPublisher: (add) =>{
        const publisher = publisherModel.readPublisher();
        publisher.push(add);
        publisherModel.writePublisher(publisher);
        console.log("Añadido exitosamente");
    },
    //Metodo para buscar por medio de la editorial
    searchByPublisher:(namePublisher) =>{
        const list = publisherModel.readPublisher();
        const foundPublisher = list.filter(nameP => nameP.publisher.trim().toLowerCase() === namePublisher.trim().toLowerCase());
        return foundPublisher;
    },
    //Buscar por el año
    searchByYearPublisher:(yearPublisher) =>{
        const list = publisherModel.readPublisher();
        const foundYearPublisher = list.filter(year => year.anio.trim().toLowerCase() === yearPublisher.trim().toLowerCase());
        return foundYearPublisher;
    },
};
module.exports = publisherController;