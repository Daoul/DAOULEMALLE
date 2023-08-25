import { Component , OnInit } from '@angular/core';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent implements OnInit {
  public nombreC: string
  public correoC: string
  public telefonoC: string
  public direccionC: string
  public codigoP: string

  constructor(){
    this.nombreC= "Assitan"
    this.correoC= "Lancine"
    this.telefonoC= "123546897"
    this.direccionC= "calle Fernando Guanarteme33"
    this.codigoP= "35010"
    
  }



  ngOnInit(): void {
  
}

}
