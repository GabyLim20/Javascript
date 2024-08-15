
//Realizar una función que escriba una pirámide del 1 al 30 de la siguiente forma:
//Ejercicio8
let piramide = (limit) => {
    for(let i = 0; i <=limit ; i++){
        let linea = "";

    for(let repetir = 0 ; repetir<i ; repetir++){
        linea+=i+""
    }
    console.log(linea);
    }
}
piramide(30);