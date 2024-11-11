/*Define un type que pueda representar tanto números como cadenas. Crea una
función que reciba dos parámetros de este tipo y retorne una tupla con el tipo
de cada parámetro. */
type numbers = number | string;
function identificarTipos(a: numbers, b: numbers): [string, string] {
    return [typeof a, typeof b];
}
console.log(identificarTipos("Naranja", 10));