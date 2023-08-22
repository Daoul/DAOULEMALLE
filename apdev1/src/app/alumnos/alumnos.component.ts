import { Component } from '@angular/core';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent {
  
  public ListadoAlumnos: string
  public Alumno1: string
  public Alumno2: string
  public Alumno3: string

  constructor(){
    this.ListadoAlumnos = "Listado de Alumnos"
    this.Alumno1 = "Ana Maria Lopez"
    this.Alumno2 = "Manola Fernandez"
    this.Alumno3 = "Paula Martinez"
  }
  
  

 
}
