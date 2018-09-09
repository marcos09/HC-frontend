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

  constructor(private http: HttpClient) {}


}
