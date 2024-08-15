const prompt=require('prompt-sync')();

const verifyYear = (year) => {
    let years;
    //Verificar origen del auto
    if(year >= 65){
        years = `Tienes ${year} tienes el 15% de descuento en todos tus productos`;
    }
    else{
        years = `Tienes ${year} no tienes ningún descuento en los productos`;

    }
    return years;
}
//Solicitar marca de auto al usuario
let getYear = prompt("¿Cuál es tú edad? ");
//Llamar a la funcion y obtener resultado
let discount = verifyYear(getYear);
console.log(discount);