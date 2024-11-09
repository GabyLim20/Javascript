//Convertir los datos que pide las funciones
const responseView = {
    formatResponse: (data) =>{
        //Convertimos los datos a un JSON
        return JSON.stringify(data,null,2);
    }
}
module.exports = responseView;