import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
    })
  };
  url = 'http://127.0.0.1:8080/';
  constructor(private http: HttpClient) { }


getUsers(): Observable<any> {
return this.http.get(this.url + 'user/list');
}

addUser(user: User): Observable<any> {
  this.httpOptions.headers.set('Content-Type', 'application/json');
  return this.http.put(this.url + 'user/crearUsuario', user, this.httpOptions);
}

getRoles(): String[] {
return ['Medico', 'Administrador', 'Enfermero', 'Epidemiologo'];
}

deleteUser(id: number): Observable<any> {
  return this.http.delete(this.url + 'user/' + id, this.httpOptions);
  }

}
