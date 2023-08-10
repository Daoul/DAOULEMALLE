$(document).ready(function(){

    // Cambiar color colores
    var cuerpo = $('#colores');

    cuerpo.click(function(){
    $('body').css("background", "black")
    .css("color", "white") 
    .css("font-size", "1.2em") 
    .css("font-style", "italic");
    $('header').css("background", "black");
    $('.contenedor').css("background", "black")
    .css("border", ".2em solid white") ;

   });

    // Contenedor 1 Avatar1
   var contenedor1 = $('#uno')
   contenedor1.click(function(){
    $('.cont1').css("background-image", "url('media/avatar1.jpg')")
                .css("background-position", "center center")
                .css("background-size", "50%")
                .css("background-repeat", "no-repeat");
   });

   
    // Contenedor 2 Toggle Class
   $( function() {
    $( "#dos" ).on( "click", function() {
      $( ".cont2" ).toggleClass( "newClass", 1000 );
    });
  } );

  // Contenedor 3 Efecto Show blind
  $( function() {
    $( "#tres" ).on( "click", function() {
     $( ".cont3" ).toggle( "blind", 1000 );
        });
    } );


    // Contenedor 4 Color Animation
   $( function() {
    var state = true;
    $( "#cuatro" ).on( "click", function() {
      if ( state ) {
        $( ".cont4" ).animate({
          backgroundColor: "#aa0000",
          color: "#fff",
          width: 500
        }, 1000 );
      } else {
        $( ".cont4" ).animate({
          backgroundColor: "#fff",
          color: "#000",
          width: 240
        }, 1000 );
      }
      state = !state;
    });
  } );

  // Contenedor 5 Switch Class
  $( function() {
    $( "#cinco" ).on( "click", function() {
      $( ".cont5" ).switchClass( "newcont5", "anothercont5", 1000 );
      $( ".anothercont5" ).switchClass( "anothercont5", "newcont5", 1000 );
    });
  } );


  // Contenedor 6 Efecto Show bounce
  $( function() {
    $( "#seis" ).on( "click", function() {
     $( ".cont6" ).toggle( "bounce", 1500 );
        });
    } );



  // Contenedor 7 Efecto Show clip
  $( function() {
    $( "#siete" ).on( "click", function() {
     $( ".cont7" ).toggle( "clip", 1000 );
        });
    } );
  

// Contenedor 8 Draggable
  var contenedor8 = $('#ocho')
   contenedor8.click(function(){
    $( function() {
        $( ".cont8" ).draggable();
      } );
   });

   // Contenedor 9 Efecto Show drop
  $( function() {
    $( "#nueve" ).on( "click", function() {
     $( ".cont9" ).toggle( "drop", 2000 );
        });
    } );

    // Contenedor 10 Efecto Show explode
  $( function() {
    $( "#diez" ).on( "click", function() {
     $( ".cont10" ).toggle( "explode", 1000 );
        });
    } );

     // Contenedor 11 Efecto Show fold
  $( function() {
    $( "#once" ).on( "click", function() {
     $( ".cont11" ).toggle( "fold", 2000 );
        });
    } );

    // Contenedor 12 Efecto Show highlight
  $( function() {
    $( "#doce" ).on( "click", function() {
     $( ".cont12" ).toggle( "highlight", 2000 );
        });
    } );
  

// Buton cambiar color
   var colores = $("#colores");
   colores
    .css("background-color", "rgb(115, 151, 236);")
    .css("color", "white")
    .css("font-size", "1em");
    

});