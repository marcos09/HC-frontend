import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Ingreso } from './ingreso/ingreso';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HistoriaService {
  httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
    })
  };

  url = 'http://127.0.0.1:8080/ingreso/createIngreso';

  constructor(private http: HttpClient) { }



  crear(ingreso: Ingreso): Observable<any> {
    this.httpOptions.headers.set('Content-Type', 'application/json');
    return this.http.put(this.url, ingreso, this.httpOptions);
  }
}
