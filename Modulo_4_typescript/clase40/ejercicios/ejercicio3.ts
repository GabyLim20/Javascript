/*
Declara un enum llamado DiasDeLaSemana con los valores: Lunes, Martes,
Miercoles, Jueves, Viernes, Sabado, Domingo.
2. Crea una función que reciba un día de la semana y devuelva un mensaje
indicando si es un día laborable o un día de descanso.
3. Usa el enum para invocar la función con el valor Sabado y muestra el
resultado por consola.
*/
enum dayOfWeek{
    Lunes,
    Martes,
    Miercoles,
    Jueves,
    Viernes,
    Sabado,
    Domingo
}
let laboral = (dia:dayOfWeek):void =>{
    if (dia === dayOfWeek.Sabado || dia === dayOfWeek.Domingo) {
        console.log("Es un día de descanso.");
      } else {
        console.log("Es un día laborable.");  
      }
}
function labora(dia: dayOfWeek):string {
    if (dia === dayOfWeek.Sabado || dia === dayOfWeek.Domingo) {
        return "Es un día de descanso.";
      } else {
        return "Es un día laborable.";
      }
}

console.log(labora(dayOfWeek.Sabado));