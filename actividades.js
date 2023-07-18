// function calcular()
// function calcular(nro1, nro2){
//     document.write("Sumar " + (nro1+nro2) + "<br/>");
//     document.write("Restar " + (nro1-nro2) + "<br/>");
//     document.write("Multiplicar " + (nro1*nro2) + "<br/>");
//     document.write("Dividir " + (nro1/nro2) + "<br/>");
//     document.write("<hr>");

// }

// // calcular();
// // calcular();
// // calcular();
// // calcular();

// // calcular(10, 12);
// // calcular(5, 6);
// // calcular(3, 9);
// // calcular(34, 35);

// for (var n=1; n<=5; n++){
//     document.write(n + "<br/>");
//     calcular(n, 5);
// }

// Parámetros opcionales
function calcular(nro1, nro2, ver = false){  // ver peude ser: ver = false, ver = 3, ver = 6
    if(ver == false){
    document.write("Sumar " + (nro1+nro2) + "<br/>");
    document.write("Restar " + (nro1-nro2) + "<br/>");
    document.write("Multiplicar " + (nro1*nro2) + "<br/>");
    document.write("Dividir " + (nro1/nro2) + "<br/>");
    document.write("<hr>");
    }else {
        document.write("No tengo nada que mostrar!!!");
    }

}
calcular(20, 5, false);