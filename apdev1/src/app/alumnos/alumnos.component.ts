import { Component, OnInit } from '@angular/core';
import { alumnosBD } from '../modelos/alumnos';
import { AlumnosService } from '../servicios/alumnos.service';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css'],
  providers: [AlumnosService]
})
export class AlumnosComponent implements OnInit {
  public alumnosAll: Array<alumnosBD>


  
  constructor(private _AlumnosService: AlumnosService){
    this.alumnosAll = new Array<alumnosBD>()
    
  }

  ngOnInit(): void {
    console.log(this.alumnosAll)
    this.alumnosAll = this._AlumnosService.getAlumnos();
    
  }

 
}
