var identi = prompt("¿Quien es? " );

if (identi == "admin" || identi == "Admin" || identi == "ADMIN" ){
    var contrasena = prompt("Introduce la contarseña ");
    if(contrasena == "webmaster"){
        console.log("Bienvenido!");
    }
    else if(contrasena == "" || contrasena == null){
        console.log("Cancelado");
    }
    else{
        console.log("Incorrecto");
    }
}
else if(identi == "" || identi == null){
    console.log("Cancelado");
}
else{
    console.log("Incorrecto");
}
