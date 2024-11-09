//1. Definición básiva de un objeto
let gato ={
    color: "naranja",
    nombre: "Arturo",
    anios: 1
};
//Mostrar las propiedades del objeto en consola
console.log(`Color: ${gato.color}, Nombre: ${gato.nombre}, Edad: ${gato.anios}`);
// 2.Declaración explicita del tipo de dato
let libro:{titulo: string; autor: string; paginas: number} = {
    titulo: "Cien anios de Soledad",
    autor: "Garcia Marquez",
    paginas: 500
};

//Mostrar las propiedades del objeto en consola
console.log(`Titulo: ${libro.titulo}, Autor: ${libro.autor}, Paginas: ${libro.paginas}`);
//3. Propiedades opcionales
let estudiantes: {nombre:string; edad?:number} ={
    nombre: "Ana"
};
console.log(`Nombre: ${estudiantes.nombre}, Edad: ${estudiantes.edad} ?? "Desconocida`);
//4. Metodo en un objeto
let perro = {
    nombre: "Khalua",
    raza: "shnnauzer",
    //Metodo
    ladrar: function(){
        return `${perro.nombre} esta ladrando!`
    }
};
console.log(perro.ladrar());
