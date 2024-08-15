const prompt=require('prompt-sync')();

const verifyCar = (marca) => {
    let origen;
    //Verificar origen del auto
    if(marca === "Chevrolet" || marca === "Ford" || marca === "Fiat"){
        origen = `${marca} es de origen nacional`;
    }else{
        origen = `${marca} es de origen importado`;
    }
    return origen;
}
//Solicitar marca de auto al usuario
let marcaAuto = prompt("¿Cuál es la marca de tu coche? ");
//Llamar a la funcion y obtener resultado
let resultado = verifyCar(marcaAuto);
console.log(resultado);
