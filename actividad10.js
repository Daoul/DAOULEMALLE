// var importe = parseInt(prompt("El importe de la compra: " ));
// var mes = (prompt("Introduce el mes: "));
//     console.log("El importe de la compra es: "  + importe + "€");
//     console.log("El mes es: "  + mes);
// var total = "";

// enero y febrero un 20%.
// if( mes == "enero" || mes == "febrero" ){

//     document.write( "El total es " + total + " = " + (importe * 0.80) + "€" + "<br/>");

//     // total = importe * 0.80;
//     // console.log( "El total es " + total );
//     // break;

// }

// // Julio y agosto un 15%.
// else if ( mes == "julio" || mes == "agosto" ){
//     // total = importe * 0.85;
//     // console.log( "El total es " + total );
//     document.write( "El total es " + total + " = " + (importe * 0.85) + "€"+ "<br/>");

// }

// // Noviembre y diciembre un 25%.
// else if ( mes == "noviembre" || mes == "diciembre" ){
// // total = importe * 0.75;
// // console.log(" El total es " + total );
// document.write( "El total es " + total + " = " + (importe * 0.75) + "€" + "<br/>");

// }

// // Meses sin descuentos
// else{
// // total = importe ;
// // console.log(" El total es " + total );
// document.write( "El total es " + importe + "€" );

// }

var importe = parseInt(prompt("El importe de la compra: " ));
var mes = (prompt("Introduce el mes: "));
var pfinal = 0;
document.write("El importe de la compra es: "  + importe + "€" +"<br/>");
console.log("El mes es: "  + mes +"<br/>");

switch (mes) 

{
    // enero y febrero un 20%.
    // case enero || febrero:
    case enero:
        total = importe * 0.80;
    break;
    case febrero:
        total = importe * 0.85;
    break;
    // Julio y agosto un 15%.
    // case julio || agosto:
    //     total = importe * 0.85;
    // break;
    // // Noviembre y diciembre un 25%.
    // case Noviembre || diciembre:
    //     total = importe * 0.75;
    // break;
    default:
        total = importe;
    break;
}
console.log(total);
