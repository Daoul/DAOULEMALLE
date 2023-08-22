import { Component } from '@angular/core';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.component.html',
  styleUrls: ['./alumno.component.css']
})
export class AlumnoComponent {

  public DatosAlumno: string
  public NombreAlumno: string
  public ApellidoAlumno: string
  public CorreoAlumno: string 
  public CursoAlumno: string 
  public NivelAlumno: number 
  
  constructor(){
    this.DatosAlumno = "Datos del Alumno"
    this.NombreAlumno = "Ana Maria "
    this.ApellidoAlumno = "Lopez"
    this.CorreoAlumno = "anamlopez@gmail.com"
    this.CursoAlumno = "Desallorador Web"
    this.NivelAlumno = 3
    
  }

}
