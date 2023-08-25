import { Component, OnInit  } from '@angular/core';
import { cursoBD } from '../modelos/curso';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit{
  public cursoAll:Array<cursoBD>

  constructor(){
    this.cursoAll = [
      new cursoBD("Desallorador Web", "Aprender a cear Paginás Web ", "./assets/medias/VideoClase.mp4", true  )
    ]
  }

  ngOnInit(): void {
    console.log(this.cursoAll)
  }
  
}
