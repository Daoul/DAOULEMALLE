function rellenardatos(){
    var datos=[];
    var cod = document.getElementById("codigo").value;
    var nombre = document.getElementById("nbre_apelli").value;
    var edade = document.getElementById("edad").value;
    var coreo = document.getElementById("correo").value;
    var telef = document.getElementById("telefono").value;
    var tema = document.getElementById("temas").value;

    // alumno = datos;
    // datos.push(cod, nombre, edade, coreo, telef, tema);
    // console.log(datos);
    // document.getElementById("alumno").innerHTML="Datos de los alumnos " + datos;

    document.getElementById("alumno").innerHTML="Datos de los alumnos: " +"</br> Codigo: " +cod +"</br> Nombre y Apellidos: "+nombre + "</br> Edad: "  +edade + "</br> Correo Electronico: " +coreo  +"</br> Telefono: " +telef +  "</br> Temas: "  +tema;
}
