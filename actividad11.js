var identi = prompt("¿Quien es? " );

if (identi == "admin" || identi == "Admin" || identi == "ADMIN" ){
    var contrasena = prompt("Introduce la contarseña ");
    if(contrasena == "webmaster"){
        document.write( "Bienvenido"+ "<br/>");
        // console.log("Bienvenido!");
    }
    else if(contrasena == "" || contrasena == null){
        document.write( "Cancelado"+ "<br/>");
        // console.log("Cancelado");
    }
    else{
        document.write( "Incorrecto"+ "<br/>");
        // console.log("Incorrecto");
    }
}
else if(identi == "" || identi == null){
    document.write( "Cancelado"+ "<br/>");
    // console.log("Cancelado");
}
else{
    document.write( "Incorrecto"+ "<br/>");
    // console.log("Incorrecto");
}
