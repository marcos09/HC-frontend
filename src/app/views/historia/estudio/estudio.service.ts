import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Estudio } from './estudio';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EstudioService {

  httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
    })
  };

  constructor(private http: HttpClient) { }

  obtenerEstudio(idBusqueda: String): Observable<any> {
      const url = environment.url + 'estudio/' + idBusqueda;
      this.httpOptions.headers.set('Content-Type', 'application/json');
      return this.http.get(url , this.httpOptions);
  }

  cargarResultado(estudio: Estudio): Observable<any> {
    const url = environment.url + 'estudio/update';
      this.httpOptions.headers.set('Content-Type', 'application/json');
      return this.http.put(url , estudio, this.httpOptions);
  }

  pendientes(): Observable<any> {
    const url = environment.url + 'estudio/activos';
    return this.http.get(url, this.httpOptions);
  }


}
