$(document).ready(function(){
   
    $(".principal").click(function(){

        $(".infoprincipal").css("background-image", "url('media/imagen-curso.jpg')");

        $(".infoprincipal h1,p").css("color", "#ffff00");
    })

    $(".principal").click(function(){

        $(".infocontainer").css("background-color", "#ff82f4");
        $(".acceso").css("gap", "1em");
        $(".acceso").css("padding", "1em");
        $(".infocurso").css("gap", "1em");
        $(".infocurso").css("padding", "1em");
    })
    
})