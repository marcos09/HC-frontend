import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { Paciente } from '../ingreso/paciente';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {

  httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
    })
  };

  constructor(private http: HttpClient) { }


  obtenerPaciente(idBusqueda: String): Observable<any>  {
    const url = environment.url + 'pacientes/dni/' + idBusqueda;
    this.httpOptions.headers.set('Content-Type', 'application/json');
    return this.http.get(url , this.httpOptions);
  }

  updatePaciente(paciente: Paciente): any {
    const url = environment.url + 'pacientes/update';
    this.httpOptions.headers.set('Content-Type', 'application/json');
    return this.http.put(url , paciente, this.httpOptions);
  }

}
