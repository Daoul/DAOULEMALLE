import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { GUsuarioService } from 'src/app/config/Servicios/gusuario.service';
import { GUsuario } from 'src/app/config/Modelos/gusuario';

@Component({
  selector: 'app-listar-usuarios',
  templateUrl: './listar-usuarios.component.html',
  styleUrls: ['./listar-usuarios.component.css']
})
export class ListarUsuariosComponent implements OnInit {
  listUsuarios: GUsuario[] = []

constructor(private _gusuarioService: GUsuarioService,
            private toastr: ToastrService ){
  
}
  ngOnInit(): void{
this.obtenerUsuarios()
  }
  obtenerUsuarios() {
    this._gusuarioService.getUsuarios().subscribe(data => {
      console.log(data);
      this.listUsuarios = data;
    }, error => {
      console.log(error);
    })
  }
  eliminarUsuario(id: any) {
    this._gusuarioService.eliminarUsuario(id).subscribe(data => {
      this.toastr.error('El usuario fue eliminado con exito' ,'Usuario Eliminado');
      this.obtenerUsuarios();
    }, error => {
      console.log(error);
    })
  }
}
