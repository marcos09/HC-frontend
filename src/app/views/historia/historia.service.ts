import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Ingreso } from './ingreso/ingreso';
import { Observable } from 'rxjs';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HistoriaService {
  httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
    })
  };


  constructor(private http: HttpClient) { }



  crear(ingreso: Ingreso): Observable<any> {
    const url = environment.url + 'ingreso/createIngreso';
    this.httpOptions.headers.set('Content-Type', 'application/json');
    return this.http.put(url , ingreso, this.httpOptions);
  }

  obtenerPaciente(id: String): Observable<any> {
    const url = environment.url + 'historia/' + id + 'paciente';
    this.httpOptions.headers.set('Content-Type', 'application/json');
    return this.http.put(url , this.httpOptions);
  }

}
