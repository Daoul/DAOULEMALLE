$(document).ready(function(){

    var bodi = $('#contraste');

    bodi.click(function(){
    $('body').css("background", "black")
    .css("color", "white") 
    .css("font-size", "1.2em") 
    .css("font-style", "italic");
    $('a').css('color', 'white');
    $('a:hover').css('color', 'red');
    $('#seccion4').css("background", "black");

   });

    $( function() {
        $( "#seccion3" ).accordion();
    } );

    $( function() {
        $( document ).tooltip();
    } );

    var contraste = $("#contraste");
    contraste
    .css("background-color", "rgb(115, 151, 236);")
    .css("color", "white")
    .css("font-size", "1em");

});
