$(document).ready(function(){
    $('.textcont1').click(function(){
        $(this)
        .text('Sección 1')
        .css('color', '#FFF')
        .css('background-color', '#008CBA');
    })

    $('#dos').click(function(){
        $('.cont2').effect("blind", 2000)
    })

    $('#tres').click(function(){
        $('.cont2').effect("bounce", 4000)
    })
    $('#todo').click(function(){
        $('.cont2').toggle("drop", 2000)
        $('.cont3').toggle("fade", 2000)
        $('.cont4').toggle("blind", 2000)
        $('.cont5').toggle("drop", 2000)
        $('.cont6').toggle("explode", 2000)
        $('.cont7').toggle("fade", 2000)
        $('.cont8').toggle("fold", 2000)
        $('.cont9').toggle("puff", 2000)
        $('.cont10').toggle("pulsate", 2000)
        $('.cont11').toggle("shake", 2000)
        $('.cont12').toggle("fade", 2000)

    })
   
    


    
});