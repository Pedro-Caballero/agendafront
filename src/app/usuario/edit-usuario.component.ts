import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Toast, ToastrService } from 'ngx-toastr';
import { Usuario } from '../models/usuario';
import { UsuarioService } from '../service/usuario.service';

@Component({
  selector: 'app-edit-usuario',
  templateUrl: './edit-usuario.component.html',
  styleUrls: ['./edit-usuario.component.css']
})
export class EditUsuarioComponent implements OnInit {

  usuario: Usuario = null;

  constructor(private usuarioService: UsuarioService,
              private activatedRoute: ActivatedRoute,
              private toastr: ToastrService,
              private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params.id;
    this.usuarioService.detail(id).subscribe(
      data => {
        this.usuario = data
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Error', {
          timeOut: 3000, positionClass: 'toast-top-center',
        });
        this.router.navigate(['/'])
      }
    )
  }

  onUpdate(){
    const id = this.activatedRoute.snapshot.params.id;
    this.usuarioService.update(id, this.usuario).subscribe(
      data => {
        this.toastr.success('Usuario actualizado', 'ok', {
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
