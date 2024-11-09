//Ejemplos de var: Alcance y Hoisting
function ejemploVar(){
    //@ts-ignore
    console.log(variableVar); //undefined por hosting
    var variableVar = "Soy una variable var"
    console.log(variableVar); //log normal
}
ejemploVar();
//Ejemplo de let: alcance de bloque y sin hoisting
function ejemploLet() {
    //console.log(variableLet); //Error no hay acceso a la variable
    let variableLet = "Soy una variable let";
    console.log(variableLet); 
}
ejemploLet();
//Ejemplo de const: valor constante y alcance de bloque
function ejemploConst(){
    const variableConst = "Soy una variable const"
    console.log(variableConst);
    //variableConst = "Otro valor";//Error asignar a una variable constante
}
ejemploConst();