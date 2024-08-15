/*
Usando filter, crear un nuevo array con todos los elementos que sean strings y guardalo en la variable soloStrings.

*/
const mix = [
    'Ut vero.',
    2,
    function () { console.log('hola mundo')},
    56,
    'Diam rebum nonumy et.',
    true,
    false,
    'Kasd stet.',
    'Sit et dolor.',
    null,
    null,
    [1,2,3],
    'Dolore.'
];
let soloString = mix.filter(doc => typeof doc === "string")


console.log(soloString);
