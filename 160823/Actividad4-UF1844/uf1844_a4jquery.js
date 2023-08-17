$(document).ready(function(){

    $( function() {
        $( "#acordeon" ).accordion();
      } );

// Cambiar color colores
var cuerpo = $('#colores');

cuerpo.click(function(){
$('body').css("background", "black")
.css("color", "white") 
.css("font-size", "1.2em") 
.css("font-style", "italic");
$('header').css("background", "black");
$('#acordeon').css("background", "black")
.css("border", ".2em solid white") ;
$('#mostrar').css("background", "black")
.css("border", ".2em solid white") ;
$('.acordione').css("background", "black")
.css("border", ".2em solid white") ;
$('footer').css("background", "black");

});





})