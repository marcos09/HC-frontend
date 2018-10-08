import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Ingreso } from './ingreso/ingreso';
import { Observable } from 'rxjs/observable';
import {environment} from '../../../environments/environment';
import { Seguimiento } from './seguimiento/seguimiento';
import { Egreso } from './egreso/egreso';
import { Paciente } from './paciente/paciente';

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

  crear(ingreso: Ingreso, idPaciente: number): Observable<any> {
    const url = environment.url + 'ingreso/createIngreso/' + idPaciente;
    this.httpOptions.headers.set('Content-Type', 'application/json');
    return this.http.put(url , ingreso, this.httpOptions);
  }

  obtenerPaciente(id: String): Observable<Paciente> {
    const url = environment.url + 'historia/' + id + '/pacienteEgreso';
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

  obtenerHistoriasActivas(): Observable<any> {
    const url = environment.url + 'historia/activas/';
    return this.http.get(url , this.httpOptions);

  }

  obtenerHistoriaOrdenada(idHistoria: number): Observable<any> {
    const url = environment.url + 'historia/ordenada/' + idHistoria;
    return this.http.get(url , this.httpOptions);

  }

  obtenerHistoriaCompletaOrdenada(idHistoria: number): Observable<any> {
    const url = environment.url + 'historia/completaOrdenada/' + idHistoria;
    return this.http.get(url , this.httpOptions);

  }

  getSeguimiento(idSeguimiento: number): Observable<any> {
    const url = environment.url + 'seguimiento/' + idSeguimiento;
    return this.http.get(url , this.httpOptions);

  }

  getIngreso(idHistoria: number): Observable<Ingreso> {
    const url = environment.url + 'historia/' + idHistoria + '/ingreso/' ;
    return this.http.get(url , this.httpOptions);
  }
}
