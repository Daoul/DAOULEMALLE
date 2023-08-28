import { Component, OnInit } from '@angular/core';
import { cursosBD } from '../modelos/cursos';
import { CursosService } from '../servicios/cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css'],
  providers: [CursosService]
})
export class CursosComponent implements OnInit{
  public cursosAll:Array<cursosBD>

   constructor(private _CursosService: CursosService){
    this.cursosAll = new Array<cursosBD>()
    
  }

  ngOnInit(): void {
    console.log(this.cursosAll)
    this.cursosAll = this._CursosService.getCursos();
    
  }
  
  
  
  // public Nota:number

  // constructor(){
  //   this.cursosAll = [
  //     new cursosBD("Desallorador Web", "Aprender a cear Paginás Web ", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit cupiditate non, fugit officia, quam doloribus asperiores nesciunt, esse amet nobis rem explicabo doloremque repellat? Odit nesciunt repudiandae odio ipsum ratione.", true ),
  //     new cursosBD("Applicación Web", "Desallorador Applicación Web ", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit cupiditate non, fugit officia, quam doloribus asperiores nesciunt, esse amet nobis rem explicabo doloremque repellat? Odit nesciunt repudiandae odio ipsum ratione.", true ),
  //     new cursosBD("Securidad Informatico", "Aprender la securidad entorno Infirmatica ", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit cupiditate non, fugit officia, quam doloribus asperiores nesciunt, esse amet nobis rem explicabo doloremque repellat? Odit nesciunt repudiandae odio ipsum ratione.", false )
  //   ]
  //   this.Nota = 0
  // }

  // ngOnInit(): void {
  //   console.log(this.cursosAll)
  // }


}
