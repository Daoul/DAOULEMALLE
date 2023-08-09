document.getElementById("curso").addEventListener("click", function (event) {
    event.preventDefault()

let display = document.querySelector('.infoprincipal');


display.innerHTML =
`
<h1>Estás en la Academia</h1>
<p>Este es tu Itinerario Formativo</p>
<button>Entrar</button>
`

})