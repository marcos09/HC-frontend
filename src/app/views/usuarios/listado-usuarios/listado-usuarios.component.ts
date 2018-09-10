import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Usuario } from '../usuario';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-listado-usuarios',
  templateUrl: './listado-usuarios.component.html',
  styleUrls: ['./listado-usuarios.component.css']
})
export class ListadoUsuariosComponent implements OnInit {

  constructor(private userService: UsuarioService) { }

  @Output() deleteUser = new EventEmitter<Usuario>();
  @Input()  public usuarios: Usuario[] = [];
  ngOnInit() {
  }

  removeUser(actualUser: Usuario) {
    console.log('Eliminar usuario desde el listado');
    this.deleteUser.emit(actualUser);
  }

}