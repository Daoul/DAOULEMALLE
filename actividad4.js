// var ninos = parseInt(prompt("El número de niños: " ));
// var ninas = parseInt(prompt("El número de niñas: "));
//     console.log("Niños: "  + ninos);
//     console.log("Niñas: "  + ninas);

// var totalninos = ninos + ninas;
// var porcentninos = (ninos*100)/totalninos
// var porcentninas = (ninas*100)/totalninos

// console.log(" El porcentaje de de niños: " + porcentninos)
// console.log(" El porcentaje de de niñss: " + porcentninas)


//Actividad4

// var niños = parseInt(prompt ("Introduce el número de niños"));
// console.log ("El número de niños es " + niños);
// var niñas = parseInt(prompt ("Introduce el número de niñas"));
// console.log ("El número de niñas es " + niñas);

// function porcentajeniños (num1,num2) {
//     return num1 * 100 / (num1 + num2);
// }
// console.log ("El porcentaje de niños es del " + porcentajeniños(niños,niñas));

// function porcentajeniñas (num1,num2) {
//     return num2 * 100 / (num1 + num2);
// }
// console.log ("El porcentaje de niñas es del " + porcentajeniñas(niños,niñas));


function porcentaje(){
    var ninos = Number(document.getElementById("numninos").value);
    var ninas = Number(document.getElementById("numninas").value);
    var totalninos = ninos + ninas;
    var porcentninos = (ninos*100)/totalninos
    var porcentninas = (ninas*100)/totalninos

    document.getElementById("porcentninos").innerHTML="Porcentaje de niños: " + porcentninos.toFixed(2) + "%";
    document.getElementById("porcentninas").innerHTML="Porcentaje de niñas: " + porcentninas.toFixed(2) + "%";
}