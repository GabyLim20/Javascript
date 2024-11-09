let listaDeSuperMercado = [
    'Bife de chorizo',
    'Coca Cola',
    'Bananas',
    'Lechuga',
    'Chimichurri',
    'Lata de tomates',
    'Arvejas',
    'Cereales',
    'Pechuga de pollo',
    'Leche'
  ];
  let i = 0;
  listaDeSuperMercado.forEach(function(lista){
    console.log("La lista es: " + lista);
  });
   listaDeSuperMercado.push("Papas");
   listaDeSuperMercado.shift()
  listaDeSuperMercado.forEach(function(lista){
    console.log("item " + i + " " + lista);
    i++
  });
    let search = listaDeSuperMercado.lastIndexOf("Cereales");
    
    if( search  ){
      console.log(search + 1);
    } else{
      console.log("No se encontró" );
    }