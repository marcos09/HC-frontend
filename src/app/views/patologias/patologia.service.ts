import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '../../../../node_modules/@angular/common/http';
import { Patologia } from './patologia';
import { Observable } from 'rxjs/observable';
import { environment } from '../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class PatologiaService {


  httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'Content-type': 'application/json',
    })
  };

  patologias: Patologia[] = [];

  crear(patologia: Patologia): Observable<any> {
    this.patologias.push(patologia);
    return this.http.put(environment.url + 'patologias/crearPatologia', patologia, this.httpOptions);

  }
  getPatologias(): Observable<any> {
    return this.http.get(environment.url + 'patologias/list', this.httpOptions);
  }

  eliminar(id: Number): Observable<any> {
    const url = environment.url + 'patologias/' + id;
    return this.http.delete(url, this.httpOptions);
  }

  editar(patologia: Patologia): any {
    const url = environment.url + 'patologias/updatePatologia';
    return this.http.put(url, patologia, this.httpOptions);
  }

  obtenerPatologia(id: Number): any {
    const url = environment.url + 'patologias/' + id;
    return this.http.get(url , {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*',
        'Content-type': 'application/json',
      }), observe: 'response'
    }
    );
  }

  constructor(private http: HttpClient) {}


}
