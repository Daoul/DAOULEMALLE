function guardarAlmacenamientoLocal(llave, valor_a_guardar) {
    localStorage.setItem(llave, JSON.stringify(valor_a_guardar))
}
function obtenerAlmacenamientoLocal(llave) {
    const datos = JSON.parse(localStorage.getItem(llave))
    return datos

}

function estilo(){
    const card = document.querySelector('.card');
const colors = document.querySelectorAll('.colors div');

let hexCodes = ['#ea25b5', '#04bbec', '#ff82f4', '#0d3f7c' ,'#cdeae8'];

colors.forEach((item, i) => {
    item.addEventListener('click', () => {
        const root = document.querySelector(':root');

        root.style.setProperty
        ('--curso-img', `url(medias/${item.className}.jpg)`);
        root.style.setProperty('--bg-color', hexCodes[i]);
    })
})
}