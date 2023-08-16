$(document).ready(function(){

    // Recoger datos petición AJAX
    $.get("https://reqres.in/api/users",{page: 2}, function(respuesta){respuesta.data.forEach((element, index) => {
        $('#datos').append("<p>"+element.identificación+" "+element.first_name+" "+element.last_name+" "+element.correo_electronico+" "+element.edad+" "+element.fotografía+"</p>");
        
    });
});
$('#formulario').submit(function(e){
    e.preventDefault();
    var usuario = {
        codigo: $('input[name="codigo" ]').val(),
        nombre: $('input[name="nombre" ]').val(),
        apellido: $('input[name="apellido" ]').val(),
        correo: $('input[name="correo" ]').val(),
        edad: $('input[name="edad" ]').val(),
        fotografia: $('input[name="fotografia"]').val()
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
