import { Injectable } from "@angular/core";
import { cursosBD } from '../modelos/cursos'



@Injectable({
    providedIn: 'root'
})
export class CursosService{
    private cursosAll: Array<cursosBD>

    constructor(){
        this.cursosAll = [
            new cursosBD("Desallorador Web", "Aprender a cear Paginás Web ", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit cupiditate non, fugit officia, quam doloribus asperiores nesciunt, esse amet nobis rem explicabo doloremque repellat? Odit nesciunt repudiandae odio ipsum ratione.", true ),
            new cursosBD("Applicación Web", "Desallorador Applicación Web ", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit cupiditate non, fugit officia, quam doloribus asperiores nesciunt, esse amet nobis rem explicabo doloremque repellat? Odit nesciunt repudiandae odio ipsum ratione.", true ),
            new cursosBD("Securidad Informatico", "Aprender la securidad entorno Infirmatica ", "./assets/medias/VideoClase.mp4", false )
        ]
}

getTexto(){
    return "Texto desde un servicio"
}

getCursos(): Array<cursosBD>{
    return this.cursosAll
}
}