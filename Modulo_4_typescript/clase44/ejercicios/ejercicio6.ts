/*Crea una variable de tipo any y haz una conversión con aserciones dobles para
convertirla en un number*/
let valor: any = "123";
let valorNumerico: number = (valor as unknown as number);

console.log(valorNumerico); 