import { Component } from '@angular/core';

@Component({
  selector: 'app-profesores',
  templateUrl: './profesores.component.html',
  styleUrls: ['./profesores.component.css']
})
export class ProfesoresComponent {
  public ListadoProfes: string
  public profe1: string
  public profe2: string
  public profe3: string

  constructor(){
    this.ListadoProfes = "Listado de Profesores"
    this.profe1 = "Maria Sanschez"
    this.profe2 = "Manel Hernandez"
    this.profe3 = "José Martinez"
  }

}
