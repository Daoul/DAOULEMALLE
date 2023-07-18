var importe = parseInt(prompt("El importe de la compra: " ));
var mes = (prompt("Introduce el mes: "));
    console.log("El importe de la compra es: "  + importe);
    console.log("El mes es: "  + mes);
var total;

    if (mes == "octubre" ){
        total = importe * 0.85;
        console.log("El total es " + total );
    }
    else{
        total = importe;
        console.log("El total es " + total );
    }