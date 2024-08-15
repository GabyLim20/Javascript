const prompt = require('prompt-sync')();

//Crear un array de objetos llamado libros
let libros = [
    {
        id: 1,
        titulo: "El Señor de los Anillos",
        autor: "J.R.R. Tolkien",
        anio: 1954,
        genero: "Fantasía",
        disponible: true
    },
    {
        id: 2,
        titulo: "El Código Da Vinci",
        autor: "Dan Brown",
        anio: 2003,
        genero: "Misterio",
        disponible: true
    },
    {
        id: 3,
        titulo: "Vas a ser mia",
        autor: "Anny Peterson",
        anio: 2020,
        genero: "Romance",
        disponible: true
    },

    {
        id: 4,
        titulo: "Girlboss",
        autor: "Nasty Gal",
        anio: 2015,
        genero: "Autoayuda",
        disponible: true
    },
    {
        id: 5,
        titulo: "Deja de pensar demasiado",
        autor: "Nick Trenton",
        anio: 2021,
        genero: "Autoayuda",
        disponible: true
    },
    {
        id: 6,
        titulo: "Las alas que inventamos ",
        autor: "Alexandra Roma",
        anio: 2024,
        genero: "Romance",
        disponible: true
    },
    {
        id: 7,
        titulo: "Crónicas de una muerte anunciada",
        autor: "Gabriel García Márquez",
        anio: 1981,
        genero: "Novela",
        disponible: true
    },
    {
        id: 8,
        titulo: "Hitler y Stalin",
        autor: "Laurence Rees",
        anio: 2022,
        genero: "Historia",
        disponible: true
    },
    {
        id: 9,
        titulo: "Cuando las hormonas se desmadran",
        autor: "Miriam Al Adib Mendiri   ",
        anio: 2024,
        genero: "Ciencia",
        disponible: true
    },
    {
        id: 10,
        titulo: "Dicen por ahí",
        autor: "    Yoly Mosteiro",
        anio: 2024,
        genero: "Romance",
        disponible: true
    }


];
//Crear un array de objetos llamado usuarios 
let usuarios = [
    { id: 1, nombre: "Jose Ayala", email: "jose@gmail.com", librosPrestados: [] },
    { id: 2, nombre: "Gabriela Limón", email: "gaby@gmail.com", librosPrestados: [] },
    { id: 3, nombre: "Andrea Ayon", email: "andrea@gmail.com", librosPrestados: [] },
    { id: 4, nombre: "Florinda Meza", email: "florinda@gmail.com", librosPrestados: [] },
];


//Primera función para la visualización de los libros y usuarios
function Estructura(opcion) {
    if (opcion === 1) {
        console.log(libros); //Imprimir libros
    } else if (opcion === 2) {
        console.log(usuarios); //Imprimir usuarios
    } else {
        console.log("Opción no válida.");
    }
    returnMenu(() => Estructura(opcion)); //Regresar al menú ya sea anterior o Principal
}

// Implementar una función agregarLibro(id, titulo, autor, anio, genero) que agregue un nuevo libro al array libros.
let agregar = (titulo, autor, anio, genero) => {
    let newBook = {
        id: libros.length + 1,
        titulo: titulo,
        autor: autor,
        anio: anio,
        genero: genero,
        disponible: true,
    };
    libros.push(newBook)  //Agregar el libro al final de la lista.
    //En esta sección se muestra el libro agregado y aparte toda la lista del array.
    console.log(`El nuevo libro agregado es: 
    Id: ${newBook.id}
    Título: ${newBook.titulo}
    Autor: ${newBook.autor}
    Año: ${newBook.anio}
    Género: ${newBook.genero}
    Disponible: ${newBook.disponible}`)
    console.log(libros); // Agrego toda la lista de libros para verificar se agrego
    returnMenu(() => menuGestion()); // Rgresar a menu
}
//Crear una función buscarLibro(criterio, valor) que permita buscar libros por título, autor o género utilizando el algoritmo de búsqueda lineal. 
function searchBook(criterio, valor) {
    switch (criterio) {
        case "titulo":
            //Iteración de los libros para ir uno por uno
            for (let i = 0; i < libros.length; i++) {
                //Aqui hago la comparación del titulo con el valor que se escribe
                if (libros[i].titulo.toLowerCase() === valor.toLowerCase()) {
                    console.log(libros[i]); // Imprimir el libro si se encontro el valor
                };
            } console.log("error");
            break;
        case "autor":
            for (let i = 0; i < libros.length; i++) {
                if (libros[i].autor.toLowerCase() === valor.toLowerCase()) {
                    console.log(libros[i]);
                };
            } console.log("error");

            break;
        case "genero":
            for (let i = 0; i < libros.length; i++) {
                if (libros[i].genero.toLowerCase() === valor.toLowerCase()) {
                    console.log(libros[i]);
                };
            } console.log("error");
            break;
        default:
            console.log("Error");
            break;
    }

    returnMenu(() => menuGestion());

}

//una función ordenarLibros(criterio) que ordene los libros por título o año utilizando el algoritmo de ordenamiento burbuja (bubble sort) y luego muestre los libros ordenados en la consola.

let ordenarLibros = (criterio) => {
    for (let i = 0; i < libros.length; i++) {
        for (let j = 0; j < libros.length - 1; j++) {
            //Realizo un switch para los diferentes casos para ordenar por titulo o año y en titulo le agrego 
            //el lowerCase para poderlo escribir 
            switch (criterio) {
                case 1:
                    if (libros[j].titulo.toLowerCase() > libros[j + 1].titulo.toLowerCase()) {
                        let temp = libros[j];
                        libros[j] = libros[j + 1];
                        libros[j + 1] = temp;
                    }
                    break;
                case 2:
                    if (libros[j].anio > libros[j + 1].anio) {
                        let temp = libros[j];
                        libros[j] = libros[j + 1];
                        libros[j + 1] = temp
                    }
                    break;
                default:
                    console.log("Error");
                    break;
            }
        }
    }
    console.log(libros);
    returnMenu(() => menuGestion());
}

//función borrarLibro(id) que elimine el libro que se le pase por parámetro.

function borrarLibro(id) {
    let search = libros.find((libro) => libro.id === id); //Buscar el primer id que encuentre 
    if (search) {
        console.log("Se va a eliminar: ", search);
        libros.shift(id); // Eliminarlo
        console.log(`La lista quedaría: `, libros);
    } else {
        console.log("Error, no se encuentra el id");
    }

};

//Menu realizado para saber si quieres regresar al menu anterior o principal
//Este me costo un poquito de trabajo ya que al inicio el parametro me daba un error
let returnMenu = (returnM) => {
    let menuReturn = parseInt(prompt("Deseas regresar: \n1- Menú Anterior \n2- Menú Principal\n"));
    if (menuReturn === 1) {
        returnM();
    } else if (menuReturn === 2) {
        menuPrincipal();
    } else {
        console.log("Opción no válida. Regresando al menú principal.");
        menuPrincipal();
    }
};


//función registrarUsuario(nombre, email)
function registrarUsuario(nombre, email) {
    let newUser = {
        id: usuarios.length + 1,
        nombre: nombre,
        email: email,
        librosPrestados: [],
    };
    usuarios.push(newUser)  //Agregar el libro al final de la lista.
    //En esta sección se muestra el libro agregado y aparte toda la lista del array.
    console.log(`El nuevo usuario es: 
    ID: ${newUser.id}
    Nombre: ${newUser.nombre}
    Correo: ${newUser.email}`)
    returnMenu(() => menuGestionUser()); //regresar a menu

}
//función mostrarTodosLosUsuarios() 
function mostrarTodosLosUsuarios() {
    console.log("Los usuarios son", usuarios); //Imprimir los usuarios
    returnMenu(() => menuGestionUser()); //regresar a menu

}
//Crear una función suario(email) que devuelva la información de un usuario dado su email.
function buscarUsuario(correo) {

    correo = correo.toLowerCase();

    // Buscar usuario
    for (let i = 0; i < usuarios.length; i++) {
        let usuarioCorreo = usuarios[i].email.toLowerCase(); //Poner el correo en minuscula
        if (usuarioCorreo === correo) { //Validar si es el correo
            console.log(usuarios[i]);
            return;
        }
    }
    console.log("Error: Usuario no encontrado");
    returnMenu(() => menuGestionUser());
}

//Implementar una función borrarUsuario(nombre, email) que elimine el usuario seleccionado.
let borrarUsuario = (nombre, email) => {
    let usuarioEncontrado = false;

    for (let i = 0; i < usuarios.length; i++) { //Iteramos la lista de usuario
        //Validamos si es el mismo el nombre y correo agregando el lower para que no importa si escribe en mayuscula
        if (usuarios[i].nombre.toLowerCase() === nombre.toLowerCase() && usuarios[i].email.toLowerCase() === email.toLowerCase()) {
            //corte y empalme
            usuarios.splice(i, 1);
            usuarioEncontrado = true;
            break;
        }
    }

    //Se valida si se encontro y se muestra
    if (usuarioEncontrado) {
        console.log("Usuario eliminado:", nombre, email);
    } else {
        console.log("Usuario no encontrado.");
    }
     
    returnMenu(() => menuGestionUser());
}

//función prestarLibro(idLibro, idUsuario)
function prestarLibro(idLibro, idUsuario) {
    let libroEncontrado; // Guardar el libro para despues usarlo para cambiar su disponibilidad
    let usuarioEncontrado; // Usuario para guardar el libro
    //Buscar el libro
    for (let i = 0; i < libros.length; i++) {
        if (libros[i].id === idLibro) {
            libroEncontrado = libros[i];
            break;
        }
    }
    // Verificar si el libro está disponible
    if (libroEncontrado.disponible === true) {
        // Buscar el usuario
        for (let i = 0; i < usuarios.length; i++) {
            if (usuarios[i].id === idUsuario) {
                usuarioEncontrado = usuarios[i];
                break;
            }
        }
        // Cambiar los status 
        libroEncontrado.disponible = false;
        usuarioEncontrado.librosPrestados.push(libroEncontrado.id);
        console.log(`Libro prestado: ${libroEncontrado.titulo} a ${usuarioEncontrado.nombre}`);
    } else {
        console.log("Error: Libro no disponible");
    }
    returnMenu(() => menuPrestamo());
}
/*Implementar una función devolverLibro(idLibro, idUsuario) que marque un libro como disponible y lo elimine de la lista de libros prestados del usuario.
*/
function devolverLibro(idLibro, idUsuario) {
    let libroEncontrado; // Guardar el libro a devolver para despues usarlo para cambiar su disponibilidad
    let usuarioEncontrado; // Usuario para guardar el libro
    //Buscar el libro
    for (let i = 0; i < libros.length; i++) {
        if (libros[i].id === idLibro) {
            libroEncontrado = libros[i];
            break;
        }
    }
    // Verificar si el libro está disponible
    if (libroEncontrado.disponible === false) {
        // Buscar el usuario
        for (let i = 0; i < usuarios.length; i++) {
            if (usuarios[i].id === idUsuario) {
                usuarioEncontrado = usuarios[i];
                break;
            }
        }

        // Cambiar los status 
        libroEncontrado.disponible = true;
        usuarioEncontrado.librosPrestados.shift(libroEncontrado);
        console.log(`Libro devuelto: ${libroEncontrado.titulo} a ${usuarioEncontrado.nombre}`);
    } else {
        console.log("Error: Libro no disponible");
    }
    returnMenu(() => menuPrestamo());
}
/*
Crear una función generarReporteLibros() que utilice métodos avanzados de arrays (.map(), .filter(), .reduce()) para generar un reporte con la siguiente información:
*/
function generarReporteLibros() {
    //Cantidad total de libros.
    let cantidadTotal = libros.length;
    // primero reviso que libros no estan disponibles
    let titulos = libros.filter(libro => !libro.disponible);
    // sumo los libros ya filtrados
    let cantidadLibrosPrestados = titulos.reduce((total) => total + 1, 0);
    //Cantidad de libros por género. 
    //recorre el array y devuelve un único valor.
    let librosGenero = libros.reduce((acum, libro) => {
        acum[libro.genero] = (acum[libro.genero] || 0) + 1; //Se valida si el genero esta(si esta se suma) si no se agrega y se suma 1, por default lo inicializamos en 0
        return acum;
    }, {});
    //Libro más antiguo y más nuevo 
    //https://stackoverflow.com/questions/43576241/using-reduce-to-find-min-and-max-values
    //Aquí hacemos un recorrido con el reduce donde se va guardando el año en min- max y va iterando para ver si el año es mayor o menor dependiendo lo que se solicite
    let libroAntiguo = libros.reduce((min, libro) => {
        return libro.anio < min ? libro.anio : min;
    }, libros[0].anio);
    let libroNuevo = libros.reduce((max, libro) => {
        return libro.anio > max ? libro.anio : max;
    }, libros[0].anio);

    console.log(`La cantidad total de libros es: ${cantidadTotal}\nCantidad de libros prestados ${cantidadLibrosPrestados}\nCantidad libros por genero es`, librosGenero);
    console.log(`El libro más antiguo es ${libroAntiguo} y el más nuevo ${libroNuevo}`);
}

//PASO 6
/*
 Implementar una función librosConPalabrasEnTitulo() que identifique y muestre todos los libros cuyo título contiene más de una palabra (no títulos que contengan números ni otros caracteres).
b) La función debe devolver un array con los títulos de esos libros y mostrarlo en la consola.
*/

let librosConPalabrasEnTitulo = () => {
    let array= [];
    //Iteración
    for (let i = 0; i < libros.length; i++) {
        // Dividir el título en palabras y contar
        let palabras = libros[i].titulo.trim().split(/\s+/);

        // Verificar si el título solo contiene letras y espacios
        let esTituloValido = true;
        //Iteración
        //búsqueda con esta expresión regular para encontrar una coincidencia entre una expresión regular y una cadena especificada.
        for (let j = 0; j < palabras.length; j++) {
            if (!/^[a-zA-ZñÑ]+$/.test(palabras[j])) {
                esTituloValido = false;
                break;
            }
        }
        // Si el título tiene más de una palabra y es válido, añadirlo al array
        if (palabras.length > 1 && esTituloValido) {
            array.push(libros[i].titulo);
        }
    }
    // Mostrar los títulos identificados
    console.log(librosConPalabrasEnTitulo);
}

//PASO 7
/*
Desarrollar una función calcularEstadisticas() que utilice el objeto Math para calcular y mostrar:
✓ Promedio de años de publicación de los libros.
✓ Año de publicación más frecuente.
✓ Diferencia en años entre el libro más antiguo y el más nuevo.
*/
function calcularEstadisticas() {
    //Guardamos el array de años de los libros
    let arrayAnio = libros.map(libro => libro.anio);
    //Promedio de años de publicación de los libros.
    let cantidadDeLibros = libros.length
    //Hacemos uso del reduce para poder sumar los años de los libros dandote el valor total
    let suma = libros.reduce((suma, libro) => suma + libro.anio, 0);
    let promedio = (suma  / cantidadDeLibros)
    //Usamos round para poder redondear el año
    let redondeo = Math.round(promedio)
    console.log("El promedio de año de publicación es: " + redondeo);

    //Año de publicación más frecuente.d
    let anioMayor = null; //Variable pra guardar el año más frecuente
    let maxFrequency = 0; //Variable temporal
//Utilice como referencia la matriz
    for (let i = 0; i < libros.length; i++) { //Iteramos los libros
        let anio = 1; 
        for (let j = i + 1; j < libros.length; j++) { //Comparamos los libros 
            if (libros[i].anio === libros[j].anio) { //Validamos si son iguales los años
                anio++; //si, sí le sumamos uno
            }
        }
        if (anio > maxFrequency) { //Validamos ya cual es el año
            maxFrequency = anio;
            anioMayor = libros[i].anio;
        }
    }
    console.log("El año con más frecuencia es:", anioMayor);
    //Diferencia en años entre el libro más antiguo y el más nuevo.
    //Sacamos el año maximo y minimo y los restamos
    let max = Math.max(...arrayAnio);
    let min = Math.min(...arrayAnio);
    let diferencia = max - min;
    
    console.log("La diferencia en años son:", diferencia);
}

//PASO 8
function normalizarDatos() {

    for (let i = 0; i < libros.length; i++) {
        // Convertir el título a mayúsculas
        libros[i].titulo = libros[i].titulo.toUpperCase();
    }// Retornar el arreglo de libros modificado
    //Eliminar espacios en blanco al inicio y final de los nombres de autores
    libros.forEach(libro => {
        //auto.replace(/, /g, ",").trim();
        libro.autor = libro.autor.trim();
    });
    // Formatear los emails de los usuarios a minúsculas.
    usuarios.forEach(usuario => {
        usuario.email = usuario.email.toLowerCase();
    });

    console.log(libros)
    console.log(usuarios)
}


let menuPrincipal = () => {
    while (true) {
        console.log(`
            ~ Menú principal ~
            Selecciona una opción:
            1- Estructura de Datos
            2- Gestión de libros
            3- Gestión de Usuarios
            4- Sistema de Préstamos
            5- Reportes
            6- Identificación de libros
            7- Cálculos Estadísticos
            8- Cadenas
            9- Salir: `);
        let opcion = parseInt(prompt());

        switch (opcion) {
            case 1:
                console.log("Estructura de datos\nDeseas ver: \n1- Libros \n2- Usuarios \n3- Volver al Inicio\n");
                let opcMenu1 = parseInt(prompt(" "));
                if (opcMenu1 === 3) {
                    continue;
                } else {
                    Estructura(opcMenu1);
                }
                break;
            case 2:
                console.log("Gestión de libros");
                menuGestion();
                break;
            case 3:
                console.log("Gestión de Usuarios");
                menuGestionUser();
                break;
            case 4:
                console.log("Sistema de Préstamos");
                menuPrestamo();
                break;
            case 5:
                console.log("Reportes");
                generarReporteLibros()
                break;
            case 6:
                console.log("Identificación de libros");
                identificarLibros()
                break;
            case 7:
                console.log("Cálculos Estadísticos");
                calcularEstadisticas()
                break;
            case 8:
                console.log("Cadenas");
                normalizarDatos()
                break;
            case 9:
                console.log("Saliendo del programa...");
                return;
            default:
                console.log("Opción no válida. Volviendo al menú principal.");
                break;
        }
    }
};
/*
Menú para la 2da función de gestión
*/
function menuGestion() {
    console.log("~~ Gestión ~~\n 1- Agregar Libro\n 2- Buscar Libro\n 3- Ordenar Libro\n 4- Borrar Libro");
    let menu = parseInt(prompt());
    switch (menu) {
        case 1:
            let titulo = prompt("Escribe el titulo: ");
            let autor = prompt("Escribe el autor: ");
            let anio = prompt("Escribe el año: ");
            let genero = prompt("Escribe el genero: ");
            agregar(titulo, autor, anio, genero);
            break;
        case 2:
            let criterio = prompt("¿Qué criterio quieres buscar? titulo, autor, genero: ");
            let valor = prompt("Escribe el valor: ");
            searchBook(criterio, valor);
            break;
        case 3:
            let opcion = parseInt(prompt("¿Cómo deseas ordenar?\n1- Titulo\n2- Año: "));
            ordenarLibros(opcion);
            break;
        case 4:
            let erase = parseInt(prompt("¿Qué id quieres eliminar?"));
            borrarLibro(erase)
            break;
        default:

            break;
    }

}

function menuGestionUser() {
    console.log("««« Gestión Usuario «««\n 1- Agregar Usuario\n 2- Mostrar Usuarios\n 3- Buscar Usuario\n 4- Borrar Usuario");
    let menu = parseInt(prompt(" "));
    switch (menu) {
        case 1:
            let nombre = prompt("Escribe el nombre: ");
            let email = prompt("Escribe el correo: ");
            registrarUsuario(nombre, email);
            break;
        case 2:
            mostrarTodosLosUsuarios()
            break;
        case 3:
            let opcion = prompt("¿Qué usuario quieres buscar?(Se busca por correo): ");
            buscarUsuario(opcion);
            break;
        case 4:
            let name = prompt("¿Qué nombre quieres eliminar? ");
            let correo = prompt("Agrega también el correo: ");
            borrarUsuario(name, correo);
            break;
        default:
            break;
    }

}
function menuPrestamo() {
    console.log("~~Prestamo~~\n 1- Prestar Libro\n 2- Devolver Libro");
    let menu = parseInt(prompt());
    switch (menu) {
        case 1:
            let idLibro = parseInt(prompt("Ingrese el ID del libro que desea prestar: "));
            let idUsuario = parseInt(prompt("Ingrese el ID del usuario que recibirá el libro: "));
            prestarLibro(idLibro, idUsuario);
            break;
        case 2:
            let idBook = parseInt(prompt("Ingrese el ID del libro que desea prestar: "));
            let idUser = parseInt(prompt("Ingrese el ID del usuario que recibirá el libro: "));
            devolverLibro(idBook, idUser)
            break;
        default:
            break;
    }

}


menuPrincipal();
