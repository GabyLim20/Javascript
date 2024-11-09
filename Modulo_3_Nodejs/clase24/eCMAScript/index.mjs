//.js  -> Por defecto utiliza CommonJs
//.mjs -> Para utilizar ES Module

import { multi, resta, suma } from "./sum.mjs";

//.cjs -> para utilizar CommonJs
export {suma , resta, multi} from   "./sum.mjs"

console.log(suma(1,2));
console.log(resta(1,2));
console.log(multi(1,2));