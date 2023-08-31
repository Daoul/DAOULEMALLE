import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit{

  public nombreReg: string
  public correoReg: string
  public contrasenaReg: string

  constructor(){
    this.nombreReg= ""
    this.correoReg= ""
    this.contrasenaReg= ""
  }



  ngOnInit(): void {
  
}
}
