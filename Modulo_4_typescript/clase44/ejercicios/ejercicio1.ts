let people = {
    nombre:'Gabs',
    edad: 24,
    nacionalidad: 'Mexicana'
}

for (let propiedad in people){
    console.log(`Propiedad ${propiedad}, Valor: ${people[propiedad as keyof typeof people]}`);
    
}