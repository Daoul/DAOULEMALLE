$(document).ready(function(){
   
    $(".infocontenedor2").click(function(){

        $(".contenedor2").css("background-image", "url('medias/imagen-curso.jpg')");
        $(".contenedor2 h1,p").css("color", "#ffff00");
    })

    $(".profe").dblclick(function(){

        $(".aceder").css("background-color", "#ff82f4");
        $(".aceder h3").css("color", "red");
    })

    $(".alum").click(function(){

        $(".aceder").css("background-color", "#ffff00");
        $(".aceder h3").css("color", "#ea25b5");
       
    })
    
})