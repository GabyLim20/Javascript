/*
 Crea un objeto llamado deportista que tenga las propiedades nombre
(string), deporte (string), y energia (number). Luego, define una función entrenar
que acepte el objeto deportista y un número de horas de entrenamiento,
disminuyendo la energía del deportista en 5 por cada hora de entrenamiento. Al
final, muestra el estado del deportista en la consola.
*/
let deportista: {
    nombre: string,
    deporte: string,
    energia:number
} = {
    nombre: "Gabs",
    deporte: "Tae Kwon Do",
    energia: 20,
};
function entrenar(deportista: {nombre: string,
    deporte: string,
    energia:number}, hour:number) {
    deportista.energia -= hour*5;
    console.log(`Nombre: ${deportista.nombre}, Deporte: ${deportista.deporte}, Energia: ${deportista.energia}`);
    
}
entrenar(deportista, 3)