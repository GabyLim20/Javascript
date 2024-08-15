let estudiantes =[
    { nombre: 'John', promedio: 8.5, aprobado: true }, 
    { nombre: 'Jane', promedio: 7, aprobado: true }, 
    { nombre: 'June', promedio: 3, aprobado: false },  
    { nombre: 'Jake', promedio: 4, aprobado: false },
    { nombre: 'Jill', promedio: 9, aprobado: true }
];
// 1) Filtra los estudiantes en dos listas: aprobados y desaprobados.
let aprobados = estudiantes.filter(function(alumno){
    return alumno.aprobado == true;
});
let desaprobados = estudiantes.filter(function(alumno){
    return alumno.aprobado == false;
});
// 2) Manipula la lista de aprobados agregando un estudiante al inicio y otro al final.
aprobados.unshift({ nombre: 'Luke', promedio: 7.6, aprobado: true });
aprobados.push({ nombre: 'Tony', promedio: 6, aprobado: true });
// 3) Manipula la lista de desaprobados eliminando al primero y al último estudiante.
desaprobados.shift();
desaprobados.pop();
// 4) Utiliza map junto con indexOf para buscar un estudiante específico en la lista de aprobados
// y muestra su índice si está presente.
 let arrayNombresAprobados = aprobados.map(function(alumno){
    return alumno.nombre;
})
let posicion = arrayNombresAprobados.indexOf("Jane");
 if(posicion != -1){
    console.log("La persona se encuentra. Su índice es ", posicion);
}
// 5) Utiliza includes para verificar si un estudiante está en la lista de desaprobados
// y muestra un mensaje indicando su presencia.
let arrayNombresDesaprobados = desaprobados.map(function(alumno){
    return alumno.nombre;
})
if(arrayNombresDesaprobados.includes("June") == true){
    console.log("June se encuentra en la lista")
}
// Utilizar includes en la lista de desaprobados
if (desaprobados.map(estudiante => estudiante.nombre).includes('Jake')) {
    console.log('Jake está en la lista de desaprobados.');
} else {
    console.log('Jake no está en la lista de desaprobados.');
}
// 6) Muestra las listas de aprobados y desaprobados actualizadas después de todas las operaciones.
console.log("Los aprobados son: " + aprobados)
console.log(`Los que no aprobaron son: ${desaprobados}`)
