var importe = parseInt(prompt("El importe de la compra: " ));
var mes = (prompt("Introduce el mes: "));
    console.log("El importe de la compra es: "  + importe + " €");
    console.log("El mes es: "  + mes);
var total = "";

// enero y febrero un 20%.
if( mes == "enero" || mes == "febrero" ){

    document.write( "El total es " + total + " = " + (importe * 0.80) + " €" + "<br/>");

    // total = importe * 0.80;
    // console.log( "El total es " + total );
    // break;

}

// Julio y agosto un 15%.
else if ( mes == "julio" || mes == "agosto" ){
    // total = importe * 0.85;
    // console.log( "El total es " + total );
    document.write( "El total es " + total + " = " + (importe * 0.85) + " €"+ "<br/>");

}

// Noviembre y diciembre un 25%.
else if ( mes == "noviembre" || mes == "diciembre" ){
// total = importe * 0.75;
// console.log(" El total es " + total );
document.write( "El total es " + total + " = " + (importe * 0.75) + " €" + "<br/>");

}

// Meses sin descuentos
else{
// total = importe ;
// console.log(" El total es " + total );
document.write( "El total es " + importe + " €" );

}

//Actividad10

// var precio = parseInt(prompt("Escribe el importe de la compra"));
// var mes = prompt("Introduce el mes");
// var pfinal= 0;
// document.write("El precio es  "+precio + " €"+"<br/>");
// document.write("El mes es "+mes +"<br/>");

// mes = (mes.toLowerCase());
// switch(mes) {
//     case "enero": 
//     case "febrero":
//         pfinal = precio*0.80;
//         document.write("El precio final es "+pfinal +"<br/>");
//         break;
//     case "julio": case "agosto":
//         pfinal = precio*0.85;
//         document.write("El precio final es "+pfinal +"<br/>");
//         break;
//     case "noviembre": case "diciembre":
//         pfinal = precio*0.75;
//         document.write("El precio final es "+pfinal +"<br/>");
//         break;
//     default:
//         pfinal = precio;
//         document.write("El precio final es "+pfinal +"<br/>");
//         break;
// }
