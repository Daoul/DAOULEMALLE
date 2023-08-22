import { Component } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent {

  public ListadoCurso: string
  public Curso1: string
  public Curso2: string
  public Curso3: string

  constructor(){
    this.ListadoCurso = "Listado de Cursos"
    this.Curso1 = "Desallorador Web"
    this.Curso2 = "Applicación Web"
    this.Curso3 = "Securidad Informatico"
  }
  ngOnInt(){
    console.log("OnInit Ejecutable")
  }
  cambiarTitulo(){
    this.ListadoCurso = "Curco de"
  }

}
