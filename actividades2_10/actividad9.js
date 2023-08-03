// // Ejercicio 9.1 Introduce un valor, muestra la tabla de ese valor.
// let tabla = parseInt(prompt("¿Qué tabla de multiplicar quieres ver?"));
// alert("Quieres ver la tabla del " + tabla);

// document.write("<h1>La Tabla del " + tabla+ "</h1><br/>");
// for (var n=0; n<=10; n++){
// document.write( n + " x " + tabla + " = " + (n*tabla) + "<br/>");
// }


// //Ejercicio 9.2 Muestra todas las tablas del 0 al 10.
// for( var i=0; i<=10; i++){
//     document.write("<h1>La Tabla del " + i + "</h1><br/>");
//     for (var n=0; n<=10; n++){
//         document.write( n + " x " + i + " = " + (n*i) + "<br/>");
//     }
// }


// //Ejercicio 9.3 Muestra todas las tablas del 0 hasta la del valor mostrado.
// for( var i=0; i<=tabla; i++){
//     document.write("<h1>La Tabla del " + i + "</h1><br/>");
//     for (var n=0; n<=10; n++){
//         document.write( n + " x " + i + " = " + (n*i) + "<br/>");
//     }
// }


//Actividad9

// var numero = parseInt(prompt(`¿De que número quieres la tabla`));
// document.write("<h1>Tabla del "+numero+"</h1>");
// for(var i = 1; i <=10; i++){
// document.write(i+" x "+numero+" = "+(i*numero)+"<br/>");
// }

// // Todas las tablas

// for(var c = 1; c<= 10; c++){
//     document.write("<h1>Tabla del "+c+"</h1>");
//     for(var i = 1; i <=10; i++){
//         document.write(i+" x "+c+" = "+(i*c)+"<br/>");
//         }
// }


// // Tablas según petición
// var n = 1;
// do{
//     for(var c = 1; c<= numero; c++){
//         document.write("<h1>Tabla del "+c+"</h1>");
//         for(var i = 1; i <=10; i++){
//             document.write(i+" x "+c+" = "+(i*c)+"<br/>");
//             }
//     }
//     n++;
// }while(n==numero);

function tablas(){
    var numero = Number(document.getElementById("tablade").value);
    // document.write("<h1>Tabla del "+numero+"</h1>");
    for(var i = 1; i <=10; i++){
        tabladel = (i+" x "+numero+" = "+(i*numero)+"<br/>");
        document.getElementById("tabladel").innerHTML="tabladel: " + tabladel;

    // document.write(i+" x "+numero+" = "+(i*numero)+"<br/>");
    }

    // Todas las tablas

    // for(var c = 1; c<= 10; c++){
    //     var c = Number(document.getElementById("todatabla").value);
    //     // document.write("<h1>Tabla del "+c+"</h1>");
    //     for(var i = 1; i <=10; i++){
    //         todatabla = i*c;
    //         document.getElementById("todatabla").innerHTML="todatabla" + todatabla;
    //         // document.write(i+" x "+c+" = "+(i*c)+"<br/>");
    //     }
    // }


    // Tablas según petición
    // var n = 1;
    // do{
    //     for(var c = 1; c<= numero; c++){
    //         document.write("<h1>Tabla del "+c+"</h1>");
    //         for(var i = 1; i <=10; i++){
    //             document.write(i+" x "+c+" = "+(i*c)+"<br/>");
    //         }
    //     }
    //     n++;
    // }while(n==numero);
}