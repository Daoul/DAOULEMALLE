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


// Actividad6: Correction de Manuel
// for(var i=0;i<3; i++){
//     var contraseña = prompt("Introduce la contraseña");

//     if(contraseña=="123456"){
//         document.write("Es correcto");
//         break;
//     }
// }
// document.write("No es correcto");

function identificar(){
    for(var i=0;i<3; i++){
        var contraseña = (document.getElementById("identif").value);
    
        if(contraseña=="123456"){
            identificado = "Es correcto"
            document.getElementById("identificado").innerHTML="identificado: " + identificado;
            
            break;
        }
    }
    identificado = "No es correcto"
    document.getElementById("identificado").innerHTML="identificado: " + identificado;
}

