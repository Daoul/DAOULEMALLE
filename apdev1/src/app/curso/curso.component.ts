import { Component } from '@angular/core';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent {
  public DatosCurso: string
  public nombreCurso: string
  public infoCurso: string
  public contenido: string

  constructor(){
    this.DatosCurso = "Datos del Curso"
    this.nombreCurso = "Desallorador Web"
    this.infoCurso = "Aprender a cear Paginás Web "
    this.contenido = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit cupiditate non, fugit officia, quam doloribus asperiores nesciunt, esse amet nobis rem explicabo doloremque repellat? Odit nesciunt repudiandae odio ipsum ratione."
  }

}
