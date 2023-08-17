
    
document.getElementById("boton").addEventListener("click", function (event) {
    event.preventDefault()

    var usuario = "admin"
    var contrasena = "webmaster"

    if(usuario == "admin" && contrasena == "webmaster"){
        document.getElementById("datos").innerHTML=("admin", "","webmaster" );
    
    }else {
        document.getElementById("datos").innerHTML="No es correcta";
    }
}

   
);
