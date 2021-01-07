import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  usuarioURL = 'http://localhost:8080//usuario/';

  constructor( private httpClient: HttpClient) { }

  lista(): Observable<Usuario[]>{
    return this.httpClient.get<Usuario[]>(this.usuarioURL + 'lista');
  }

  detail(id: number): Observable<Usuario>{
    return this.httpClient.get<Usuario>(this.usuarioURL + `detail/${id}`);
  }

  detailMail(nombre: string): Observable<Usuario>{
    return this.httpClient.get<Usuario>(this.usuarioURL + `detailname/${nombre}`);
  }

  save(usuario: Usuario): Observable<any>{
    return this.httpClient.post<any>(this.usuarioURL + 'create', usuario);
  }

  update(id: number, usuario: Usuario): Observable<any>{
    return this.httpClient.put<any>(this.usuarioURL + `update/${id}`, usuario);
  }

  delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.usuarioURL + `delete/${id}`);
  }

}
