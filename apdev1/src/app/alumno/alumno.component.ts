import { Component, OnInit } from '@angular/core';
import { alumnoBD } from '../modelos/alumno';


@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.component.html',
  styleUrls: ['./alumno.component.css']
})
export class AlumnoComponent implements OnInit{
public alumnoAll: Array<alumnoBD>


constructor(){

  this.alumnoAll = [
    new alumnoBD("Javier", "Díaz", 19, "javier@gmail.com", "123456789", "./assets/medias/avatar1.jpg", true)
  ]
}
 

ngOnInit(): void {
  console.log(this.alumnoAll)
}
    
  }


