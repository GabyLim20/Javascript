import{add, multiply} from "./mathOperations" // Importamos modulo interno
import _ from "lodash" // Importamos modulo externo lodash
// Usar funciones del modulo interno
const resultadoAdd = add(5,3);
const resultMultiply = multiply(5,3);
console.log(resultadoAdd);
console.log(resultMultiply);
// Usar funcion del modulo externo lodash para eliminar dupliocados en un array
const number = [1,2,2,3,4,5,5,6,6];
const unicoNumero = _.uniq(number)
console.log(`Array sin duplicados: ${unicoNumero}`);

