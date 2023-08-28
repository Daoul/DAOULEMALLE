import { Injectable } from "@angular/core";
import { profesoresBD } from '../modelos/profesores'



@Injectable({
    providedIn: 'root'
})
export class ProfesoresService{
    private profesoresAll: Array<profesoresBD>

    constructor(){
        this.profesoresAll = [
            new profesoresBD("Miguel", "Ramírez", 54, "miguel@gmail.com", "123456789", "./assets/medias/avatar1.jpg", true),
            new profesoresBD("Maria", "Sanschez", 38, "maria@gmail.com", "123456789", "./assets/medias/avatar2.jpg", false),
            new profesoresBD("José", "Martinez", 19,"jose@gmail.com", "123456789", "./assets/medias/avatar3.jpg", true)
        ]
}

getTexto(){
    return "Texto desde un servicio"
}

getProfesores(): Array<profesoresBD>{
    return this.profesoresAll
}
}