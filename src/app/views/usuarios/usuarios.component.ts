import { Component, OnInit } from '@angular/core';
import { Usuario } from './usuario';
import { UsuarioService } from './usuario.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html'
})
export class UsuariosComponent implements OnInit {

  public availableRoles: String[] = [];
  public usuarios: Usuario[] = [];

  private busqueda: Usuario;
  public  busquedaActiva: Boolean = false;
  constructor(private userService: UsuarioService, private flashMessagesService: FlashMessagesService) {}

  saveOperation(usuario: Usuario) {
    this.userService.addUser(usuario).subscribe(
      result => {
        this.getUsers();
        console.log('Agrego el alert');
        this.flashMessagesService.show('We are in about component!', { cssClass: 'alert-success', timeout: 10000 });
        this.flashMessagesService.grayOut(true); // turn on gray out feature

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
        this.getUsers();
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
    this.availableRoles = this.userService.getRoles();

  }

  searchUser(usuario: Usuario) {
    this.busqueda = usuario;
    this.busquedaActiva = this.busqueda.isEmpty();
    this.userService.searchUsers(usuario).subscribe(
      result => {
        this.usuarios = result;
      }

    );

  }
}
