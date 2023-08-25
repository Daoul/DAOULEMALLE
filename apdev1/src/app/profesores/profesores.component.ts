import { Component, OnInit } from '@angular/core';
import { profesoresBD } from '../modelos/profesores';

@Component({
  selector: 'app-profesores',
  templateUrl: './profesores.component.html',
  styleUrls: ['./profesores.component.css']
})
export class ProfesoresComponent implements OnInit{
  public profesoresAll: Array<profesoresBD>

  constructor(){
    this.profesoresAll =[
      new profesoresBD("Miguel", "Ramírez", "miguel@gmail.com", "123456789", "./assets/media/fotommp.jpg", true),
      new profesoresBD("Maria", "Sanschez", "maria@gmail.com", "123456789", "./assets/media/fotommp.jpg", false),
      new profesoresBD("José", "Martinez", "jose@gmail.com", "123456789", "./assets/media/fotommp.jpg", true),
    ]
    
  }
  ngOnInit(): void {
    
  }

}
