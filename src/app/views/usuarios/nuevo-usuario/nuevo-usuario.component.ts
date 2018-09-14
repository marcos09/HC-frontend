import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Usuario } from '../usuario';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-nuevo-usuario',
  templateUrl: './nuevo-usuario.component.html',
})
export class NuevoUsuarioComponent implements OnInit {

  @Output() public addUser = new EventEmitter<Usuario>();

  public availableRoles: String[] = [
    'Médico',
    'Enfermera',
    'Epidemiólogo',
    'Administrador'
  ];


  public usuario: Usuario = new Usuario();
  constructor(private userService: UsuarioService) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {


  }

  saveOperation() {
    this.addUser.emit(this.usuario);
    this.usuario = new Usuario();
  }
}
