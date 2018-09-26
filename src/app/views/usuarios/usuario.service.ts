import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/observable';
import { Usuario } from './usuario';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
    })
  };
  constructor(private http: HttpClient) { }


getUsers(): Observable<any> {
  const url = environment.url + 'user/list';
  return this.http.get(url);
}

addUser(user: Usuario): Observable<any> {
  const url = environment.url + 'user/crearUsuario';
  this.httpOptions.headers.set('Content-Type', 'application/json');
  return this.http.put(url , user, this.httpOptions);
}

getRoles(): String[] {
return ['Medico', 'Administrador', 'Enfermero', 'Epidemiologo'];
}

deleteUser(id: number): Observable<any> {
  const url = environment.url + 'user/' + id;
  return this.http.delete(url, this.httpOptions);
}

searchUsers(user: Usuario): Observable<Usuario[]> {
  const url = environment.url + 'user/buscar';
  this.httpOptions.headers.set('Content-Type', 'application/json');
  return this.http.put(url, user, this.httpOptions);
}

}
