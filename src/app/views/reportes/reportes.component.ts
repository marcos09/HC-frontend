import { Component, OnInit } from '@angular/core';
import { ReporteService } from './reporte.service';
import { PromedioSeguimientos } from './promedio-seguimientos';

@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
})
export class ReportesComponent implements OnInit {

  constructor(private reporteService: ReporteService) { }

  public cantidadInternados: number;
  public cantidadPacientes: number;
  public promedioSeguimientos: number;
  public totalInternaciones: number;

  ngOnInit() {
    this.reporteService.cantidadInternaciones().subscribe(
      result => {
        this.totalInternaciones = result;
      }
    );
    this.reporteService.cantidadInternados().subscribe(
      result => {
        this.cantidadInternados = result;
      }
    );
    this.reporteService.cantidadPromedioSeguimioentos().subscribe(
      result => {
        this.promedioSeguimientos = result;
      }
    );
    this.reporteService.cantidadPacientesAtendidos().subscribe(
      result => {
        this.cantidadPacientes = result;
      }
    );
  }

}
