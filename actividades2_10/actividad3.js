// var a = parseInt(prompt("El primer número: " ));
// var b = parseInt(prompt("El segundo número: "));
//     console.log("El primer número es: "  + a);
//     console.log("El segundo número es: "  + b);

//     if (a == b){
//         console.log("Son iguales" );
//     }
//     else  if (a > b) {
//             console.log("El primer número es major" );
            
//             }
//             else {
//             console.log("El segundo número es major " );
//             }

  //Actividad3: Correction de Manuel

// var a = parseInt(prompt("Introduce el primer número"));
// console.log("El primer número es " + a);
// var b = parseInt(prompt("Introduce el segundo número"));
// console.log("El segundo número es " + b);
// if (a==b) {
//     console.log("El número " + a + " y " + "el número " + b + " son iguales");
// }else if (a>b){
//     console.log("El primero es mayor.")
// } else if (b>a){
//     console.log("El segundo es mayor")
// }else{
//     console.log("Algo pasa!!!");
// }          

    
function comparar(){

    var a = Number(document.getElementById("nbre1").value);
    var b = Number(document.getElementById("nbre2").value);
// console.log(a);
// console.log(b);
    if (a==b) {
        comparado = "El primero y el segundo son iguales";
        document.getElementById("comparado").innerHTML="comparado: " + comparado;
        
    }else if (a>b){
        comparado = "El primero es mayor";
        document.getElementById("comparado").innerHTML="comparado: " + comparado;
        
    } else{
        comparado = "El segundo es mayor";
        document.getElementById("comparado").innerHTML="comparado: " + comparado;
        
    }
    // else{
    //     comparado = "Algo pasa!!!";
    //     document.getElementById("comparado").innerHTML="comparado: " + comparado;
        
    // }          
   
}

    
    


