// JSON - JavaScript Object Notation
// Nos permite crear objectos de forma rápido

var alumno = {
    nombre: "Juan López",
    correo: "juanlopez@gmail.com",
    telefono: "555 555 555"
}

// var alumnodos = {
//     nombre: "José Garcia",
//     correo: "josegarcia@gmail.com",
//     telefono: "555 777 777"
// }

// alumno.nombre = "Juan López López"

// var alumnos = [alumno, alumnodos];// Nos permite agrupar elementos en una array
// console.log(alumnos);

// var total_alumnos = document.querySelector("#totalalumnos");

// var indice;
// for(indice in alumnos){
//     var p=document.createElement("p");
//     p.append(alumnos[indice].nombre + "-----");
//     p.append(alumnos[indice].correo + "-----");
//     p.append(alumnos[indice].telefono + "-----");
//         total_alumnos.append(p);
// }

// LocalStorage
// Comprobación de la disponibilidad del LocalStorage

if(typeof(Storage) !== 'undefined'){
    console.log("Disponible");
}else{
    console.log("No disponible");
}
// Guardando datos
localStorage.setItem("Listado", "Listado de Alumnos");

// Recuperar datos
localStorage.getItem("Listado");

// Guardar objectos JSON

localStorage.setItem("alumno", JSON.stringify(alumno));

var alumnojs = JSON.parse(localStorage.getItem("alumno"));

document.querySelector("#totalalumnos").append(alumnojs.nombre + "-----"+alumnojs.correo+ "-----"+alumnojs.telefono);

// Borrar un elemento con su palabra clave
localStorage.removeItem("Listado"); 

// Lumpia el localstorage
// localStorage.clear()
