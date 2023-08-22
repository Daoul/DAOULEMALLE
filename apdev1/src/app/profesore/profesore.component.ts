import { Component } from '@angular/core';

@Component({
  selector: 'app-profesore',
  templateUrl: './profesore.component.html',
  styleUrls: ['./profesore.component.css']
})
export class ProfesoreComponent {
  public DatosProfesor: string
  public NombreProfesor: string
  public ApellidoProfesor: string
  public CorreoProfesor: string 
  public imagenProfesor: string 
  
  
  constructor(){
    this.DatosProfesor = "Datos del Profesor"
    this.NombreProfesor = "Manuel "
    this.ApellidoProfesor = "Hernandez"
    this.CorreoProfesor = "manuelhernandez@gmail.com"
    this.imagenProfesor = ""
    
    
  }

}
