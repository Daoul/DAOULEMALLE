$(document).ready(function(){

    // Recoger datos petición AJAX
    $.get("https://reqres.in/api/users",{page: 2}, function(respuesta){respuesta.data.forEach((element, index) => {
        $('#datos').append("<p>"+element.first_name+" "+element.last_name+"</p>");
        
    });
});
$('#formulario').submit(function(e){
    e.preventDefault();
    var usuario = {
        nombre: $('input[name="nombre" ]').val(),
        web: $('input[name="web"]').val()
    };

   
    $.ajax({
        type: 'POST',
        url: $(this).attr("action"),
        data: usuario,
        beforeSend: function(){
            console.log("Enviando usuario...")
        },
        success: function(respuesta){
            console.log(respuesta)
        },
        error: function(){
            console.log("Ha ocurido un error")
        },
        timeout: 1000
    });
});



});