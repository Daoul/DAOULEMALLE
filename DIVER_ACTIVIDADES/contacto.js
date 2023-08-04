document.getElementById("contacto").addEventListener("click", function (event) {
    event.preventDefault()

    var contenido = document.querySelector(".contenedor2");
    contenido.style.background = "#ff82f4";

    contenido.innerHTML = `
    <form class="formulario" action="">
                    <label for="nombre">Nombre</label>
                    <input type="text" id="nombre" name="nombre">
        
                    <label for=">correo">Correo Electrónico</label>
                    <input type="email" id="correo" name="correo">
        
                    <label for="asunto">Asunto</label>
                    <input type="text" id="asunto" name="asunto">
        
                    <label for="">Mensaje</label>
                    <textarea name="mensaje" id="mensajes" cols="30" rows="10">Tu mensaje aquí</textarea>
        
                    <!-- <input type="submit" id="boton"> -->

                    <button id="boton">ENVIAR</button>
                           
                </form>
                 
    `
})

document.getElementById("curso").addEventListener("click", function (event) {
    event.preventDefault()

    var contenido = document.querySelector(".contenedor2");
    contenido.style.background = "#0d3f7c";
    
    contenido.innerHTML = `
    <video width="950" height="510" src="medias/VideoClase.mp4" type="video/mp4" autoplay muted loop></video>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
    `
})

// var contenido = document.querySelector(".legal");
//     contenido.style.background = "#0d3f7c";
    
    const element = document.querySelector(".legal");
    element.style.setProperty("#0d3f7c");