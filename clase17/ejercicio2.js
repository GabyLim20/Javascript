/*
¿Cuál es la posición del número 12?
¿Cuál es la posición del número 5?
¿Cuál es la posición del número 22?
¿Cuál es la posición del número 100?
*/
let lista = [12,3,5,7,1,22,47,100 ];
for (let i = 0; i<lista.length; i++){
  for(let j=0; j < lista.length - 1; j++){
    if(lista[j]> lista[j + 1]){
      let temp = lista[ j];
      lista[j ] = lista[j + 1 ];
      lista[j + 1] = temp
    }
  }
}
console.log(lista)