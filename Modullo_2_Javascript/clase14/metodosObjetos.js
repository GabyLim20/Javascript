/*
let curso = {
    cantidadDeAlumna : 32,
    docentes : ["Berni", "Mariana"],
    horario : "16 a 19 hrs.",
    notificaciones: function() {
        return "El horario de cursada es de 16 a 19 hr"
    }
}
console.log(curso.notificaciones())
*/
//Cuando ya tenemos definida la propiedad
/*
let curso = {
    cantidadDeAlumna : 32,
    docentes : ["Berni", "Mariana"],
    horario : "16 a 19 hrs.",
    notificaciones: function() {
        return "El horario de cursada es de " + curso.horario
    }
}
console.log(curso.notificaciones())*/

// palabra reservada this
let curso = {
    cantidadDeAlumna : 32,
    docentes : ["Berni", "Mariana"],
    horario : "16 a 19 hrs.",
    notificaciones: function() {
        return "El horario de cursada es de " + this.horario
    }
}
console.log(curso.notificaciones())

