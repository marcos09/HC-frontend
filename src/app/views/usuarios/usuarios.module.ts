import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuscarComponent } from './buscar/buscar.component';
import { NuevoUsuarioComponent } from './nuevo-usuario/nuevo-usuario.component';
import { ListadoUsuariosComponent } from './listado-usuarios/listado-usuarios.component';
import { UsuariosComponent } from './usuarios.component';
import { UsuarioService } from './usuario.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  declarations: [BuscarComponent, NuevoUsuarioComponent, ListadoUsuariosComponent, UsuariosComponent],
  providers: [UsuarioService],
  exports: []
})
export class UsuariosModule { }
