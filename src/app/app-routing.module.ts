import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaUsuarioComponent } from './usuario/lista-usuario.component';
import { DetalleUsuarioComponent } from './usuario/detalle-usuario.component';
import { CreateUsuarioComponent } from './usuario/create-usuario.component';
import { EditUsuarioComponent } from './usuario/edit-usuario.component';

const routes: Routes = [
  { path: '', component: ListaUsuarioComponent},
  { path: 'detalle/:id', component: DetalleUsuarioComponent},
  { path: 'crear', component: CreateUsuarioComponent},
  { path: 'editar/:id', component: EditUsuarioComponent },
  { path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
