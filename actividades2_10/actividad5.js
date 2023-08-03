// var importe = parseInt(prompt("El importe de la compra: " ));
// var mes = (prompt("Introduce el mes: "));
//     console.log("El importe de la compra es: "  + importe);
//     console.log("El mes es: "  + mes);
// var total;

//     if (mes == "octubre" ){
//         total = importe * 0.85;
//         console.log("El total es " + total );
//     }
//     else{
//         total = importe;
//         console.log("El total es " + total );
//     }


//Actividad5

// var precio = parseInt(prompt("Escribe el importe de la compra"));
// var mes = prompt("Introduce el mes");

// if (mes == "octubre"){
//     total = precio*0.85;
// }else{
//     total = precio;
// }
// console.log(total);

//Actividad6

// for(var i=0;i<3; i++){
//     var contraseña = prompt("Introduce la contraseña");

//     if(contraseña=="123456"){
//         document.write("Es correcto");
//         break;
//     }else {
//         alert("Vuelve a intentarlo");
//     }
// }



function descuento(){
    var importe = Number(document.getElementById("import").value);
    var mes = (document.getElementById("mess").value);


    if (mes == "octubre" ){
        total = importe * 0.85;
        document.getElementById("total").innerHTML="total: " + total + " €";
    
    }
    else{
        total = importe;
        document.getElementById("total").innerHTML="total: " + total + " €";
    }
}