import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs/observable';

@Injectable({
  providedIn: 'root'
})
export class ReporteService {

  httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'Content-type': 'application/json',
    })
  };
  constructor(private http: HttpClient) {

  }

  cantidadInternaciones(): Observable<any> {
    return this.http.get(environment.url + 'reportes/cantidadInternaciones', this.httpOptions);
  }

  cantidadPacientesAtendidos(): Observable<any> {
    return this.http.get(environment.url + 'reportes/cantidadPacientesAtendidos', this.httpOptions);
  }

  cantidadInternados(): Observable<any> {
    return this.http.get(environment.url + 'reportes/cantidadInternados', this.httpOptions);
  }

  cantidadPromedioSeguimioentos(): Observable<any> {
    return this.http.get(environment.url + 'reportes/avgSeguimientos', this.httpOptions);
  }

  cantidadPrescripcionesMedicamento(): Observable<any> {
    return this.http.get(environment.url + 'reportes/cantidadIndicacionesMedicamento', this.httpOptions);
  }

  cantidadPacientesDiagnosticoPresuntivo(): Observable<any> {
    return this.http.get(environment.url + 'reportes/cantidadPacientesDiagnosticoPresuntivo', this.httpOptions);
  }

  cantidadPacientesDiagnosticoSintomatico(): Observable<any> {
    return this.http.get(environment.url + 'reportes/cantidadPacientesDiagnosticoSintomatico', this.httpOptions);
  }

  egresosPorMes(): Observable<any> {
    return this.http.get(environment.url + 'reportes/EgresosMesCantidad', this.httpOptions);
  }

  seguimientosPorMes(): Observable<any> {
    return this.http.get(environment.url + 'reportes/SeguimientosMesCantidad', this.httpOptions);
  }

  IngresosPorMes(): Observable<any> {
    return this.http.get(environment.url + 'reportes/IngresosMesCantidad', this.httpOptions);
  }

}
