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

function identificar(){
    for(var i=0;i<3; i++){
        var contrasena = prompt("Introduce la contraseña de 6 cifras");
        // var contrasena =(document.getElementById("identif").value);
    
        if(contrasena == "123456"){
            document.getElementById("identifica").innerHTML="Es correcto";
            break;
        }else {
            document.getElementById("identifica").innerHTML="No pueda intentar más";
        }
    }
}

