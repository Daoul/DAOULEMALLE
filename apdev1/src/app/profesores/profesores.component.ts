import { Component, OnInit } from '@angular/core';
import { profesoresBD } from '../modelos/profesores';
import { ProfesoresService } from '../servicios/profesores.service';

@Component({
  selector: 'app-profesores',
  templateUrl: './profesores.component.html',
  styleUrls: ['./profesores.component.css'],
  providers: [ProfesoresService]
})
export class ProfesoresComponent implements OnInit {
  public profesoresAll: Array<profesoresBD>


  constructor(private _ProfesoresService: ProfesoresService){
    this.profesoresAll = new Array<profesoresBD>()
    
  }

  ngOnInit(): void {
    console.log(this.profesoresAll)
    this.profesoresAll = this._ProfesoresService.getProfesores();
    
  }

  // constructor(){
  //   this.profesoresAll =[
  //     new profesoresBD("Miguel", "Ramírez", 54, "miguel@gmail.com", "123456789", "./assets/media/fotommp.jpg", true),
  //     new profesoresBD("Maria", "Sanschez", 38, "maria@gmail.com", "123456789", "./assets/media/fotommp.jpg", false),
  //     new profesoresBD("José", "Martinez", 19,"jose@gmail.com", "123456789", "./assets/media/fotommp.jpg", true),
  //   ]
    
  // }
  // ngOnInit(): void {
    
  // }

}
