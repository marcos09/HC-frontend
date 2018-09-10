import { Component, OnInit } from '@angular/core';
import { Usuario } from './usuario';
import { UsuarioService } from './usuario.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html'
})
export class UsuariosComponent implements OnInit {
  public availableRoles: String[] = [
    'Médico',
    'Enfermera',
    'Epidemiólogo',
    'Administrador'
  ];
  public usuarios: Usuario[] = [];

  constructor(private userService: UsuarioService) {}

  saveOperation(usuario: Usuario) {
    this.userService.addUser(usuario).subscribe(
      result => {
        this.getUsers();
        if (result.code !== 200) {
          console.log(result);
          this.usuarios = result;
        } else {
          this.usuarios = result.data;
        }
      },
      error => {
        console.log(<any>error);
      }
    );


  }

  deleteUser(user: Usuario) {
    console.log('Elimino el usuario:' + user.username);

    this.userService.deleteUser(user.id).subscribe(
      result => {
        console.log(result);
        if (result.code !== 200) {
          console.log(result);
          this.usuarios = result;
        } else {
          this.usuarios = result.data;
        }
      },
      error => {
        console.log(<any>error);
      }
    );

    this.getUsers();
  }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.userService.getUsers().subscribe(
      result => {
        if (result.code !== 200) {
          console.log(result);
          this.usuarios = result;
        } else {
          this.usuarios = result.data;
        }
      },
      error => {
        console.log(<any>error);
      }
    );
  }
}
