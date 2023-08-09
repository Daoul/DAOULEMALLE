const modal_container = document.getElementById("modal_container")
const profe = document.getElementById("profe")

    window.addEventListener("load", () => {
      createModal(`
        <h3 class="modal-title">Abrir modal Emergente</h3>
        <img class="modal-img" src="media/7498232_33144.jpg" alt="">
        <p class="modal-description">Hola modal emergente</p>
        <button class="modal-btn">Contratar</button>
        <a href="#" target="_blank" rel="noopener noreferrer" class="modal-link">Link</a>
      `, "modal-aparecer")
    })