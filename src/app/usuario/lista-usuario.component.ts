import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../service/usuario.service';
import { Usuario } from '../models/usuario';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-lista-usuario',
  templateUrl: './lista-usuario.component.html',
  styleUrls: ['./lista-usuario.component.css']
})
export class ListaUsuarioComponent implements OnInit {

  usuarios: Usuario[] = [];

  constructor( private usuarioService: UsuarioService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getUsuarios();
  }

  getUsuarios():void{
    this.usuarioService.lista().subscribe(
      data => {
        this.usuarios = data;
      },
      err => {
        console.log(err);
      }
    );
  }

  borrar(id: number){
    this.usuarioService.delete(id).subscribe(
      data => {
        this.toastr.success('Usuario eliminado', 'ok', {
          timeOut: 3000, positionClass: 'toast-top-center',
        });
        this.getUsuarios();
      },
      err => {
        this.toastr.error(err.error.mensaje, 'error', {
          timeOut: 3000, positionClass: 'toast-top-center',
        });
      }
    )
  }

}
