import { Component, OnInit } from '@angular/core';
import {User} from '../entity/user'
import {UserService} from '../services/user.service';

@Component({
	selector: 'app-user-controller',
	templateUrl: './user-controller.component.html',
	styleUrls: ['./user-controller.component.css']
})
export class UserControllerComponent implements OnInit {
	
	user: User = new User();
	users: User[];

	constructor(private userService: UserService) { }

	ngOnInit() {
		this.user.username = "Username";
		this.user.email = "email@angular6.com";
		this.user.authorities = "ROLE_STUDENT";

		this.addUser(this.user);
		this.getUsers();
	}

	public saveOperation() {

	}

	addUser(user: User){
		this.userService.addUser(user).subscribe(
            result => {
                if(result.code != 200){
                    console.log(result);
                    this.users = result;
                }else{
                    this.users = result.data;
                }
            },
            error => {
                console.log(<any>error);
            }
        );

        return this.users;

	}

	getUsers() {
		this.userService.getUsers().subscribe(
            result => {
                if(result.code != 200){
                    console.log(result);
                    this.users = result;
                }else{
                    this.users = result.data;
                }
            },
            error => {
                console.log(<any>error);
            }
        );

        return this.users;
	}


}
