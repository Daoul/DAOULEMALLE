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
