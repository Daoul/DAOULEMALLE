import { Component, OnInit } from '@angular/core';
import { alumnosBD } from '../modelos/alumnos';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent implements OnInit {
  public alumnosAll: Array<alumnosBD>

  constructor(){
    this.alumnosAll =[
      new alumnosBD("Miguel", "Ramírez", 39, "miguel@gmail.com", "123456789", "./assets/medias/avatar2.jpg", true),
      new alumnosBD("Javier", "Díaz", 19, "javier@gmail.com", "123456789", "./assets/medias/avatar3.jpg", false)
    ]
  }

  ngOnInit(): void {
    console.log(this.alumnosAll)
  }
  
  
  

 
}
