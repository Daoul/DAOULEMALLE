import { Component } from '@angular/core';

@Component({
  selector: 'app-formulario-consulta',
  templateUrl: './formulario-consulta.component.html',
  styleUrls: ['./formulario-consulta.component.css']
})
export class FormularioConsultaComponent {
  public nombre1: string
  public correo1: string
  public enviar1: boolean

  constructor(){
    this.nombre1 ="Daoule"
    this.correo1 = "daoule@gmail.com"
    this.enviar1 = false

  }
 siCorrecto(){
  this.enviar1 = true
 }
 noCorrecto(){
  this.enviar1 = false
 }

}
