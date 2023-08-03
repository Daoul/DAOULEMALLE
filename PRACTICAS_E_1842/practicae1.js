
// 'use strict'
var bachiller = prompt("¿Tienes el titulo de bachiller? " );
console.log("bachiller " + bachiller );

if (bachiller == "si" ){
    console.log("Puedes acceder al grado superior " );
}else{
  var pruebac = prompt("¿Tienes la prueba de acceso superado?  " );
    console.log("prueba_acceso " + pruebac);
    if (pruebac == "si" ){
        console.log("Puedes acceder al grado superior " );
    }else{
        console.log("No puedes acceder al grado superior " );
    }
}


