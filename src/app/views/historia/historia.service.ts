import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Ingreso } from './ingreso/ingreso';
import { Observable } from 'rxjs';
import {environment} from '../../../environments/environment';
import { Seguimiento } from './seguimiento/seguimiento';
import { Egreso } from './egreso/egreso';

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
    const url = environment.url + 'historia/' + id + '/paciente';
    this.httpOptions.headers.set('Content-Type', 'application/json');
    return this.http.get(url , this.httpOptions);
  }

  addSeguimiento(seguimiento: Seguimiento, idBusqueda: String): any {
    const url = environment.url + 'historia/agregarSeguimiento/' + idBusqueda;
    this.httpOptions.headers.set('Content-Type', 'application/json');
    return this.http.put(url , seguimiento, this.httpOptions);
  }

  egresarPaciente(egreso: Egreso, idBusqueda: String): any {
    const url = environment.url + 'historia/egresar/' + idBusqueda;
    this.httpOptions.headers.set('Content-Type', 'application/json');
    return this.http.put(url , egreso, this.httpOptions);
  }

}
