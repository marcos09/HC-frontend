import { Component, OnInit } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  public  availableRoles: String[] = ['Médico', 'Enfermera' , 'Epidemiólogo', 'Administrador'];
  public user: User = new User();
  public users: User[] = [];
  constructor() { }

  saveOperation() {
    this.users.push(this.user);
    this.user = new User();
  }
  ngOnInit() {
  }
  deleteUser(actualUser: User) {
    console.log('Elimino el usuario:' + actualUser.username);
    this.users.splice(this.users.indexOf(actualUser), 1 );
  }
}
