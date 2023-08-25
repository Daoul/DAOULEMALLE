import { Component, OnInit  } from '@angular/core';
import { productosBD } from '../Modeles/productos';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {
  public productosAll: Array<productosBD>

  constructor(){
    this.productosAll =[
      new productosBD("Anillo","./assets/media/anillo1.JPG", 3900 ),
      new productosBD("Collar", "./assets/media/collare1.JPG", 6900)
    ]
  }

  ngOnInit(): void {
    console.log(this.productosAll)
  }
  
  
  

 
}
