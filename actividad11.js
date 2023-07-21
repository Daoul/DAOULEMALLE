var identi = prompt("¿Quien es? " );

if (identi == "admin" || identi == "Admin" || identi == "ADMIN" ){
    var contrasena = prompt("Introduce la contarseña ");
    if(contrasena == "webmaster"){
        document.write( "Bienvenido");
        // console.log("Bienvenido!");
    }
    else if(contrasena == "" || contrasena == null){
        document.write( "Cancelado");
        // console.log("Cancelado");
    }
    else{
        document.write( "Incorrecto");
        // console.log("Incorrecto");
    }
}
else if(identi == "" || identi == null){
    document.write( "Cancelado");
    // console.log("Cancelado");
}
else{
    document.write( "Incorrecto");
    // console.log("Incorrecto");
}


//Actividad11

    // var administrador = prompt ("usuario" , []);
    
    // if (administrador == "Admin" || administrador =="admin" || administrador== "ADMIN")
    // {
    
    // var contraseña = prompt ("contraseña:", []);
    // if (contraseña == "webmaster"){
    // alert ("Bienvenido");}
    // else if (contraseña==="" || contraseña===null){
    // alert ("cancelado");
    // }
    // else {
    //     alert ("contraseña incorrecta");
    // }

    // }else if (administrador === "" || administrador === null){
    // alert ("cancelado");
    // }else {
    // alert ("usuario incorrecto");
    // }


    