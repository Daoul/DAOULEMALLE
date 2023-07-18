// InicioProceso
// .Pedir clave
// .Si clave igual a 123456
// .Dar acceso
// .Sino
// .Pedir clave
// .No pedir más de tres veces la clave
// .Mensaje "la clave es incorrecta"
// .Finsi
// .
// .

// FinProceso

// var clave = parseInt(prompt("Introduce la clave: " ));
    // console.log("La clave: "  + clave);

// for ( var i=1; i<3; i++){
//     if(clave == 123456){
//     document.write(" Acceso ");
//     break;
//     }
//     else {
//         document.write(" la clave es incorrecta ");
//         var clave = parseInt(prompt("Introduce la clave: " ));
           
//     }
// }
for(var i=0;i<3; i++){
    var contraseña = prompt("Introduce la contraseña");

    if(contraseña=="123456"){
        document.write("Es correcto");
        break;
    }
}
document.write("No es correcto");

