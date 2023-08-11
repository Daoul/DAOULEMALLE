document.getElementById("acceso").addEventListener("click", function (event) {
    event.preventDefault()

    var contenido = document.querySelector("#mostrar");
    contenido.style.background = "#ff82f4";
    
    contenido.innerHTML = `
    
        <h3>Login</h3>
        <form class="formulario" action="">
            <label for="usuario">Usuario</label>
            <input type="text" name="usuario" id="usuario"><br> <br>
        
            <label for="contrasena">Contraseña</label>
            <input type="password" name="contrasena" id="contrasena"><br> <br>
        
       
            <input type="submit" value="Enviar">
        </form>
    
    
    `
});

document.getElementById("registro").addEventListener("click", function (event) {
    event.preventDefault()

    var contenido = document.querySelector("#mostrar");
    contenido.style.background = "#ff82f4";
    
    contenido.innerHTML = `
    
    <h3>Registro</h3>
    <form class="formulario" action="">

        <label for="nombre">Nombre</label>
        <input type="text" name="nombre" id="nombre"><br> <br>
        
        <label for="">Correo</label>
        <input type="email"><br> <br>
        
        <label for="contrasena">Contraseña</label>
        <input type="password" name="contrasena" id="contrasena"><br> <br>
       
        <label for="repetir">Repetir Contraseña</label>
        <input type="password" name="repetir" id="repetir"><br> <br>
        
        <input type="submit" value="Enviar">

    </form>
    
    `
});


document.getElementById("info").addEventListener("click", function (event) {
    event.preventDefault()

    var contenido = document.querySelector("#mostrar");
    contenido.style.background = "#ff82f4";
    
    contenido.innerHTML = `
    <h3>Información del Curso</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio aperiam ab eum sunt. Quia explicabo, voluptate alias id minima culpa voluptatem atque, ducimus magni, expedita saepe ipsa accusantium ratione asperiores!
    Neque ratione corrupti similique repellendus maiores assumenda adipisci est ex molestias, dicta iste obcaecati? Excepturi, vero. Asperiores voluptatibus veniam aspernatur rerum, animi, commodi possimus qui omnis quisquam, voluptatem sit? Amet!</p>
    
    `
});


document.getElementById("contacto").addEventListener("click", function (event) {
    event.preventDefault()

    var contenido = document.querySelector("#mostrar");
    contenido.style.background = "#ff82f4";

    contenido.innerHTML = `
    <h3>Contacto</h3>
    <form class="formulario" action="">
                    <label for="nombre">Nombre</label>
                    <input type="text" id="nombre" name="nombre"><br> <br>
        
                    <label for=">correo">Correo Electrónico</label>
                    <input type="email" id="correo" name="correo"><br> <br>
               
                    <label for="">Mensaje</label>
                    <textarea name="mensaje" id="mensajes" cols="30" rows="10">Tu mensaje aquí</textarea><br> <br>

                    <input type="submit" value="Enviar">
                   
                           
                </form>
                 
    `
});

document.getElementById("curso").addEventListener("click", function (event) {
    event.preventDefault()

    var contenido = document.querySelector("#mostrar");
    contenido.style.background = "#0d3f7c";
    
    contenido.innerHTML = `
    <video width="950" height="510" src="medias/VideoClase.mp4" type="video/mp4" autoplay muted loop></video>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
    `
});
