// DOM - Document Object Modol

var contenedor=document.getElementById("contenedor");// permite seleccionar un elemeto al HTML

contenedor.innerHTML="Contenido en el contenedor"; // permite añadir un elemeto al HTML
contenedor.style.background ="blue";
contenedor.style.padding = "20px";
contenedor.style.color ="white";

contenedor.className ="contenedor"; // permite añadir una class al HTML

function cambiarColor(){
    contenedor.style.background ="green";
}

// var  contenedor = document.querySelector("#contenedor"); // permite tambien seleccionar un elemeto al HTML
var elementos = document.getElementsByTagName(`div`);
console.log(elementos);

var contenido_tres = elementos[2];
contenido_tres.innerHTML = "Contenido Añadido";
contenido_tres.style.background ="yellow";
contenido_tres.style.color ="black";

var valor;
for(valor in elementos){
    
    if(typeof elementos[valor].textContent ==`string`){
        // console.log(elementos[valor]);
        var parrafo = document.createElement("p");
        var texto = document.createTextNode(elementos[valor].textContent);
        parrafo.append(texto);
        document.querySelector("#seccion_una").append(parrafo);
    }
}

var divcaja = document.getElementsByClassName("caja");
var div;
for (div in divcaja){
    if(divcaja[div].className == "caja"){
        divcaja[div].style.color = "blue"
    }
}

// querySelector: Seleccionar elementos por su clase
var solouno = document.querySelector("#solo_uno");
console.log(solouno);

var varios = document.querySelectorAll("div");
console.log(varios);

