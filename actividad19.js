// var alumnos = new Array(new Array ("00001", "José Gonzales", 21, "josegons@gmail.com", "638222635", "HTML"), new Array("00002", "Pablo Hernandez", 25, "pabloherz@gmail.com", "838252675", "CSS"),new Array("00003", "Paula Lopez", 23, "paulalope@gmail.com", "639625635", "JavaScript"));
// console.log(alumnos);

// document.write("<table width=200 border=1 cellpadding=1 cellspacing=1>");
// for (i=0;i<alumnos.length;i++){
//  document.write("<tr>");
//  document.write("<td><b>Alumno " + i + "</b></td>");

//  for (j=0;j<alumnos[i].length;j++){
//  document.write("<td>" + alumnos[i][j] + "</td>");
//  }
//  document.write("</tr>");
// }
// document.write("</table>");


function rellenardatos(){
    var alumnos=[];
    var cod = document.getElementById("codigo").value;
    var nombre = document.getElementById("nbre_apelli").value;
    var edade = document.getElementById("edad").value;
    var coreo = document.getElementById("correo").value;
    var telef = document.getElementById("telefono").value;
    var tema = document.getElementById("temas").value;

    
    alumnos.push(cod, nombre, edade, coreo, telef, tema);
    console.log(alumnos);

    totalalumnos = new Array(6);
    totalalumnos.push(alumnos);
   
    document.write("<table width=200 border=1 cellpadding=1 cellspacing=1>");
    for (i=0;i<totalalumnos.length;i++){
     document.write("<tr>");
     document.write("<td><b>Alumno " + i + "</b></td>");
    
     for (j=0;j<totalalumnos[i].length;j++){
     document.write("<td>" + totalalumnos[i][j] + "</td>");
     }
     document.write("</tr>");
    }
    document.write("</table>");
    
}