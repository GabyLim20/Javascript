/*
Recorrer la lista con la función forEach y mostrar la posición y el nombre de la canción utilizando un console.log()
*/
const playlist = [
    "Concrete and gold",
    "The line",
    "Sunday Rain",
    "Happy ever after (Zero Hour)",
    "Arrows",
    "Dirty water",
    "La dee da",
    "The shy is a neighborhood",
    "Make it right",
    "Run",
    "T-shirt"
];

playlist.forEach((cancion,indice) => {
    console.log("posición: " + indice);
    console.log("titulo: " + cancion)
});