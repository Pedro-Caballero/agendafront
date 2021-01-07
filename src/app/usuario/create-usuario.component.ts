import { Usuario } from './../models/usuario';
import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../service/usuario.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { ok } from 'assert';

@Component({
  selector: 'app-create-usuario',
  templateUrl: './create-usuario.component.html',
  styleUrls: []
})
export class CreateUsuarioComponent implements OnInit {

  nombre: string = '';
  email: string = '';
  tel: string = '';

  constructor(private usuarioService: UsuarioService,
              private toastr: ToastrService,
              private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(){
    const usuario = new Usuario(this.nombre, this.email, this.tel);
    this.usuarioService.save(usuario).subscribe(
      data => {
        this.toastr.success('Usuario registrado', 'ok', {
          timeOut: 3000, positionClass: 'toast-top-center',
        });
        this.router.navigate(['/'])
      },
      err => {
        this.toastr.error(err.error.mensaje, 'error', {
          timeOut: 3000, positionClass: 'toast-top-center',
        });
        this.router.navigate(['/'])
      }
    );
  }

}
