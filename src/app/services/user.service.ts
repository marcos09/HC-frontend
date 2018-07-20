import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import {User} from '../entity/user';

const httpOptions = {
  headers: new HttpHeaders({ 
    'Access-Control-Allow-Origin':'*',
  })
};
@Injectable({
	providedIn: 'root'
})
export class UserService {

	url = "http://127.0.0.1:8080/";
	constructor(private http: HttpClient) { }

	testMethod(): String{
		return "UserService";
	}


	getUsers():Observable<any>{
		return this.http.get(this.url + "user/list");
	}

	addUser(user: User): Observable<any>{
		let json = JSON.stringify(user);
		let headers = new HttpHeaders().set('Content-Type', "application/json");
		headers.append('Access-Control-Allow-Origin','*');
		return this.http.put(this.url + "user/crearUsuario", json, {headers: headers});
	}

	getRoles(): String[]{
		return ["Medico", "Administrador", "Enfermero", "Epidemiologo"];
	}
}