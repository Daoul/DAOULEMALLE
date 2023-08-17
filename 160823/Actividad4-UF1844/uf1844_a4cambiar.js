// cambiar por formulario de acceso
document.getElementById("acceso").addEventListener("click", function (event) {
    event.preventDefault()

    var contenido = document.querySelector("#mostrar");
    contenido.style.background = "#ff82f4";
    
    contenido.innerHTML = `
    
        <h3>Login</h3>
        <form class="formulario" action="" id="formular">
        
            <label for="usuario">Usuario</label>
            <input type="text" name="usuario" id="usuario"><br> <br>
        
            <label for="contrasena">Contraseña</label>
            <input type="password" name="contrasena" id="contrasena"><br> <br>
        
       
            <input id="boton" type="submit" value="Enviar">
        </form>
        
    `
// Validación de los datos del usuario
    document.getElementById("boton").addEventListener("click", function (event) {
        event.preventDefault()
    
        const usuario = "admin"
        const contrasena = "webmaster"

        var usuario1 = document.getElementById("usuario").value
        var contrasena1 = document.getElementById("contrasena").value
    
        if(usuario == usuario1 && contrasena == contrasena1){
            document.getElementById("datos").innerHTML=(`<p>Nombre de usuario: ${usuario} </p>`)
            document.querySelector("#colores").style.display = "block"
        
        }else {
            document.getElementById("datos").innerHTML= (`
            <p>No es correcta</p>`)
        }
    }
    
       
    );

});

// cambiar por formulario de registro
document.getElementById("registro").addEventListener("click", function (event) {
    event.preventDefault()

    var contenido = document.querySelector("#mostrar");
    contenido.style.background = "#ff82f4";
    
    contenido.innerHTML = `
    
    <h3>Registro</h3>
    <form class="formulario" action="">

        <label for="nombre">Nombre</label>
        <input type="text" name="nombre" id="nombre"><br> <br>
        
        <label for="correo">Correo</label>
        <input type="email" name="correo" id="correo"><br> <br>
        
        <label for="pas_palabra">Contraseña</label>
        <input type="password" name="pas_palabra" id="pas_palabra"><br> <br>
       
        <label for="repetir">Repetir Contraseña</label>
        <input type="password" name="repetir" id="repetir"><br> <br>
        
        <input id="botonAñadir" type="submit" value="Enviar">

    </form>
    
    `
// Guardar registro en LocalStorage
function guardarAlmacenamientoLocal(llave, valor_a_guardar) {
    localStorage.setItem(llave, JSON.stringify(valor_a_guardar))
}
function obtenerAlmacenamientoLocal(llave) {
    const datos = JSON.parse(localStorage.getItem(llave))
    return datos

}

let usuarios = obtenerAlmacenamientoLocal('usuarios') || [];
let mensaje = document.getElementById('mensaje')

//Añadir un usuario
const añadirUsuario = document.getElementById('nombre')
const añadirEmail = document.getElementById('correo')
const añadirContraseña = document.getElementById('pas_palabra')
const añadirRepetir = document.getElementById('repetir')

document.getElementById("botonAñadir").addEventListener("click", function (event) {
    event.preventDefault()
    let nombre = añadirUsuario.value
    let correo = añadirEmail.value
    let pas_palabra = añadirContraseña.value
    let repetir = añadirRepetir.value

    let van = true

    if (nombre == '' || correo == '' || pas_palabra == '' || repetir == '') {
        mensaje.classList.add('llenarCampos')
        setTimeout(() => { mensaje.classList.remove('llenarCampos') }, 5000)
        van = false
    }
    else {
        for (let i = 0; i < usuarios.length; i++) {
            if (usuarios[i].nombre == nombre) {
                mensaje.classList.add('repetidoError')
                setTimeout(() => { mensaje.classList.remove('repetidoError') }, 2500)
                van = false
            }
        }
    }

    if (van == true) {
        usuarios.push({
            nombre: nombre,
            correo: correo,
            pas_palabra: pas_palabra,
            repetir: repetir
        })
        mensaje.classList.add('realizado')
        setTimeout(() => {
            mensaje.classList.remove('repetidoError')
            window.location.reload()
        }, 1500)
    }
    guardarAlmacenamientoLocal('usuarios', usuarios);
})



    
});

// cambiar por información del curso
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

// cambiar por formulario de contacto
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

// cambiar por video decurso
document.getElementById("curso").addEventListener("click", function (event) {
    event.preventDefault()

    var contenido = document.querySelector("#mostrar");
    contenido.style.background = "#0d3f7c";
    
    contenido.innerHTML = `
    <video width="950" height="510" src="medias/VideoClase.mp4" type="video/mp4" autoplay muted loop></video>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
    `
});
