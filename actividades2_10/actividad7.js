function calcular(a, b){
var a = parseInt(prompt("El primer número: " ));
var b = Number(prompt("El segundo número: "));
    console.log(a);
    console.log(b);

    console.log(a+b);
    document.write(a+b + "<br/>");
    document.write(a-b + "<br/>");
    document.write(a*b + "<br/>");
    document.write(a/b + "<br/>");
}
calcular();

function comparar(a, b){
    var a = parseInt(prompt("El primer número: " ));
    var b = parseInt(prompt("El segundo número: "));
    console.log("El primer número es: "  + a);
    console.log("El segundo número es: "  + b);

    if (a == b){
        console.log("Son iguales" );
    }
    else  if (a > b) {
            console.log("El primer número es major" );
            
            }
            else {
            console.log("El segundo número es major " );
            }

}
comparar();

function porcentaje(ninos, ninas){
    var ninos = parseInt(prompt("El número de niños: " ));
    var ninas = parseInt(prompt("El número de niñas: "));
        console.log("Niños: "  + ninos);
        console.log("Niñas: "  + ninas);
    
    var totalninos = ninos + ninas;
    var porcentninos = (ninos*100)/totalninos
    var porcentninas = (ninas*100)/totalninos
    
    console.log(" El porcentaje de de niños: " + porcentninos.toFixed(2) + "%")
    console.log(" El porcentaje de de niñss: " + porcentninas.toFixed(2) + "%")
}
porcentaje();