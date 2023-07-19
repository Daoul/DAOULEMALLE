var importe = parseInt(prompt("El importe de la compra: " ));
var mes = (prompt("Introduce el mes: "));
    console.log("El importe de la compra es: "  + importe);
    console.log("El mes es: "  + mes);
var total;

switch (mes) {
    // enero y febrero un 20%.
    case enero || febrero:
    // case enero:
        total = importe * 0.80;
    break;
    case febrero:
        total = importe * 0.80;
    break;
    // Julio y agosto un 15%.
    case julio || agosto:
        total = importe * 0.85;
    break;
    // Noviembre y diciembre un 25%.
    case Noviembre || diciembre:
        total = importe * 0.75;
    break;
    default:
        total = importe;
    break;
}
console.log(total);


    // if (mes == "octubre" ){
    //     total = importe * 0.85;
    //     console.log("El total es " + total );
    // }
    // else {
    //     total = importe;
    //     console.log("El total es " + total );
    // 