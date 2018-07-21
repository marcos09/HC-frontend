import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { UserService } from './user.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  public  availableRoles: String[] = ['Médico', 'Enfermera' , 'Epidemiólogo', 'Administrador'];
  public user: User = new User();
  public users: User[] = [];

  constructor(private userService: UserService) { }

  // saveOperation() {
  //   this.users.push(this.user);
  //   this.user = new User();
  // }

  saveOperation() {
  this.userService.addUser(this.user).subscribe(
            result => {
                if (result.code !== 200) {
                    console.log(result);
                    this.users = result;
                } else {
                    this.users = result.data;
                }
            },
            error => {
                console.log(<any>error);
            }
        );

        this.getUsers();


}

deleteUser (user: User) {
  console.log('Elimino el usuario:' + user.username);
  this.userService.deleteUser(user.id).subscribe(
            result => {
                if (result.code !== 200) {
                    console.log(result);
                    this.users = result;
                } else {
                    this.users = result.data;
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
                       this.users = result;
                   } else {
                       this.users = result.data;
                   }
               },
               error => {
                   console.log(<any>error);
               }
           );
 }


  // deleteUser(actualUser: User) {
  //   console.log('Elimino el usuario:' + actualUser.username);
  //   this.users.splice(this.users.indexOf(actualUser), 1 );
  // }

}
