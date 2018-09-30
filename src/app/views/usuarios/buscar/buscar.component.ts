import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Usuario } from '../usuario';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
})
export class BuscarComponent implements OnInit {

  @Output() buscar = new EventEmitter<Usuario> ();

  @Input() roles: String[] = [];
  constructor(public userService: UsuarioService) { }
  usuario: Usuario = new Usuario();

  ngOnInit() {
  }

  searchUsers() {
    this.buscar.emit(this.usuario);
  }

  deleteData() {
    this.usuario = new Usuario();
    this.buscar.emit(this.usuario);
  }

}
