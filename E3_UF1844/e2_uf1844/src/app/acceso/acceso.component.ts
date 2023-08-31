import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acceso',
  templateUrl: './acceso.component.html',
  styleUrls: ['./acceso.component.css']
})
export class AccesoComponent implements OnInit{

  public usuarioA: string
  public contrasenaA: string

  constructor(){
    this.usuarioA= ""
    this.contrasenaA= ""
  }



  ngOnInit(): void {
  
}
}
