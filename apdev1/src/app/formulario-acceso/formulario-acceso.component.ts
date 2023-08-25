import { Component } from '@angular/core';

@Component({
  selector: 'app-formulario-acceso',
  templateUrl: './formulario-acceso.component.html',
  styleUrls: ['./formulario-acceso.component.css']
})
export class FormularioAccesoComponent {
  public usuario1: string
  public contrasena1: string
  public enviar1: boolean

  constructor(){
    this.usuario1 ="Daoule"
    this.contrasena1 = "1234"
    this.enviar1 = false

  }
 siCorrecto(){
  this.enviar1 = true
 }
 noCorrecto(){
  this.enviar1 = false
 }
}
