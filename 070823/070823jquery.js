$(document).ready(function(){

    var rojo = $("#rojo");
    rojo
    .css("background-color", "red")
    .css("color", "white");

    $('#amarillo')
    .css("background-color", "yellow")
    .css("color", "black");

    $('#verde')
    .css("background-color", "green")
    .css("color", "white");

    rojo.addClass('recuadro');// para añadir estilo 
    
    $('#amarillo').removeClass('recuadro');// para quitar estilo 

    var elemento = $('.recuadro');
    elemento
    .css("border", "2px solid black")
    .css("font-size", "1.5em");

   $('[title="Google"]').css("color", "red");

    // Eventos
//    var contenedor = $('#contenedor');

//    contenedor.mouseover(function(){
//     $(this).css("background", "red"); 
//    });

   
//    contenedor.mouseout(function(){
//     $(this).css("background", "green"); 
//    });

// function cambiaRojo(){
//     $(this).css("background", "red");
// }

// function cambiaVerde(){
//     $(this).css("background", "green");
// }
// contenedor.hover(cambiaRojo,cambiaVerde);

$(document).mousemove(function(){
    $('body').css("cursor", "none");
    $('#sigueme')
    .css("left", event.clientX)
    .css("top", event.clientY)
});

$('#add-button').click(function(){
    $('#menu').append('<li><a href="'+$('#add-link').val()+'">Ir a Nuevo enlace</a></li> ');
    $('#add-link').val('');
    reloadLinks();
});

function reloadLinks(){
    $('a').each(function(index){
        var esto = $(this);
        var enlace = esto.attr("href");
        esto.attr("target", "_blank") 
        esto.text(enlace);
        console.log(esto);
    })
}

// $('#animar').click(function(){
    // var caja=$('#contenedor');

//     caja.animate({
//         marginLeft: '400px',
//         fontSize: '40px',
//         height: '120px'}, 'slow')
//         .animate({
//             borderRadius: '25%',
//             marginTop: '200px'}, 'fast')
//         })

//     })
// })
$('#contenedor').draggable();
$('#menu').sortable();
$('#couleur').selectable();

$( function() {
    // run the currently selected effect
    function runEffect() {
      // get effect type from
      var selectedEffect = $( "#effectTypes" ).val();
 
      // Most effect types need no options passed by default
      var options = {};
      // some effects have required parameters
      if ( selectedEffect === "scale" ) {
        options = { percent: 50 };
      } else if ( selectedEffect === "transfer" ) {
        options = { to: "#button", className: "ui-effects-transfer" };
      } else if ( selectedEffect === "size" ) {
        options = { to: { width: 200, height: 60 } };
      }
 
      // Run the effect
      $( "#rojo" ).effect( selectedEffect, options, 500, callback );
    };
 
    // Callback function to bring a hidden box back
    function callback() {
      setTimeout(function() {
        $( "#rojo" ).removeAttr( "style" ).hide().fadeIn();
      }, 1000 );
    };
 
    // Set effect from select menu value
    $( "#button" ).on( "click", function() {
      runEffect();
      return false;
    });
  } );

  $( function() {
    var state = true;
    $( "#button" ).on( "click", function() {
      if ( state ) {
        $( "#couleur" ).animate({
          backgroundColor: "#aa0000",
          color: "#fff",
          width: 500
        }, 1000 );
      } else {
        $( "#couleur" ).animate({
          backgroundColor: "#fff",
          color: "#000",
          width: 240
        }, 1000 );
      }
      state = !state;
    });
  } );

  
  var busqueda = $('contenedor');
  busqueda.parent

})
