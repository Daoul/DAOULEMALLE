// BOM - Browser Object Modol

// console.log(window.innerWidth);
// console.log(window.innerHeight);

// console.log(screen.width);
// console.log(screen.height);

// console.log(window.location);

// function redirect(url){
//     window.location.href ="https://www.google.es/";
// }

// function ventananueva(url){
//     // window.open(url);
//     window.open(url,"", "width=400px", "height=300px");

// }

window.addEventListener("load", () =>{

function cambiarColor(){
    if(boton.style.background == "green"){
        boton.style.background = "red"
    }else{
        boton.style.background = "green"
    }
}
var boton = document.querySelector("#boton2");
boton.addEventListener("click" ,
function(){
    cambiarColor();
    this.style.border ="5px solid black"
})

})
var input = document.querySelector(`#nombre`);
input.addEventListener("focus", function(){
    console.log("Estas dentro del input");
})
input.addEventListener("blur", function(){
    console.log("Estas fuera del input");
})

input.addEventListener("keydown" , function(event){
    console.log("Has pulsado la tecla " + String.fromCharCode(event.keyCode));
})

input.addEventListener("keypress" , function(event){
    console.log("Has presionado la tecla " + String.fromCharCode(event.keyCode));
})




// window.addEventListener("load", () =>{

//     var boton = 
// })
