import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Prescripcion } from '../historia/prescripcion/prescripcion';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PrescripcionService {
  httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'Content-type': 'application/json',
    })
  };

  constructor(private http: HttpClient) {

   }
   getPrescripcionesActivas(): Observable<any> {
    return this.http.get(environment.url + 'prescripcion/activas', this.httpOptions);
  }

  aplicarPrescripcion(idPrescripcion: number): Observable<any> {
    return this.http.put(environment.url + 'prescripcion/aplicar/' + idPrescripcion, this.httpOptions);
  }

}
