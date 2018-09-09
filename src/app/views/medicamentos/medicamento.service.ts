import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs/observable';
import { Medicamento } from './medicamento';

@Injectable({
  providedIn: 'root'
})
export class MedicamentoService {

  httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
    })
  };

  constructor(private http: HttpClient ) { }

  obtenerMedicamentos(): Observable<any> {
    const url = environment.url + 'medicamentos/list';
    return this.http.get(url, this.httpOptions);
  }

  saveOperation(medicamento: Medicamento): Observable<any> {
    const url = environment.url + 'medicamentos/createMedicamento';
    return this.http.put(url, medicamento, this.httpOptions);
  }

}
