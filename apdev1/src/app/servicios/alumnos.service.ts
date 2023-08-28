import { Injectable } from "@angular/core";
import { alumnosBD } from '../modelos/alumnos'



@Injectable({
    providedIn: 'root'
})
export class AlumnosService{
    private alumnosAll: Array<alumnosBD>

    constructor(){
        this.alumnosAll = [
                new alumnosBD("Manuel", "M. P.", 54,"manuelmacpe@gmail.com", "667936811","./assets/medias/avatar3.jpg", true, 6), 
                new alumnosBD("Miguel", "R. R.", 39,"miguelrr@gmail.com", "123456789","./assets/medias/avatar1.jpg", true, 8), 
                new alumnosBD("Javier", "D. M.", 19,"javierdm@gmail.com", "123456789","./assets/medias/avatar5.jpg", true, 8)
        ]
}

getTexto(){
    return "Texto desde un servicio"
}

getAlumnos(): Array<alumnosBD>{
    return this.alumnosAll
}
}

