import { Component, OnInit } from '@angular/core';
import { ReporteService } from './reporte.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.css']
})
export class ReportesComponent implements OnInit {

  constructor(private reporteService: ReporteService) { }

  public cantidadInternados: number;
  public cantidadPacientes: number;
  public promedioSeguimientos: number;
  public totalInternaciones: number;

  public chart: any = null;

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

    this.reporteService.cantidadPrescripcionesMedicamento().subscribe(
      result => {

        this.chart = new Chart('realtime', {
          type: 'line',
          data: {
           labels: [],
           datasets: [
             {
            label: 'Data',
            fill: false,
            data: [],
            backgroundColor: '#168ede',
            borderColor: '#168ede'
             }
           ]
            },
            options: {
           tooltips: {
            enabled: false
           },
           legend: {
            display: true,
            position: 'bottom',
            labels: {
             fontColor: 'white'
            }
           },
           scales: {
             yAxes: [{
              ticks: {
               fontColor: 'white'
              }
             }],
             xAxes: [{
            ticks: {
             fontColor: 'white',
             beginAtZero: true
            }
             }]
           }
            }
         });
      }
    );
  }

}
