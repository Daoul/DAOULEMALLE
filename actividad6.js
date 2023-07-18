// InicioProceso
// .Pedir clave
// .Si clave igual a 123456
// .Dar acceso
// .Si no
// .Pedir clave
// .No dar más de tres
// .
// .
// .
// .

// FinProceso

var clave = parseInt(prompt("Introduce la clave: " ));
    console.log("La clave: "  + clave);

for ( var i=1; i<=3; i++){
    if(clave == 123456){
    document.write(" Dar acceso");
    break;
    }
    else {
        var clave = parseInt(prompt("Introduce la clave: " ));

        // document.write(" la clave es incorrecta");
    
    }
}

