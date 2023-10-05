import { Component, OnInit } from '@angular/core';
import { GUsuarioService } from 'src/app/config/Servicios/gusuario.service';
import { GUsuario } from 'src/app/config/Modelos/gusuario';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  listUsuarios: GUsuario[] = []
  
 
 
  constructor(private _gusuarioService: GUsuarioService ){
    
  }
    ngOnInit(): void{
  this.obtenerUsuarios()
  
    }
    obtenerUsuarios() {
      this._gusuarioService.getUsuarios().subscribe(data => {
        console.log(data);
        this.listUsuarios = data;
        console.log(this.listUsuarios)  
        console.log(this.listUsuarios[1].nombre)   
      }, error => {
        console.log(error);
      })
    }
}
