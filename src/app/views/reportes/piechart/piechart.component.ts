import { Component, OnInit } from '@angular/core';
import { ReporteService } from '../reporte.service';

@Component({
  selector: 'app-piechart',
  templateUrl: './piechart.component.html',
  styleUrls: ['./piechart.component.css']
})
export class PiechartComponent implements OnInit {

  public pieChartLabels: String[] = [];
  public pieChartData: number[] = [];
  public pieChartType: String = 'pie';
  public pieChartOptions = {
      responsive: true,
      legend: {
          position: 'left',
      },
      hover: {
          mode: 'label'
      },
      scales: {
          xAxes: [{
                  display: false,
                  scaleLabel: {
                      display: true,
                      labelString: 'Month'
                  }
              }],
          yAxes: [{
                  display: false,
                  ticks: {
                      beginAtZero: true,
                      steps: 10,
                      stepValue: 5,
                      max: 100
                  }
              }]
      },
      title: {
          display: true,
          position: 'top',
          text: 'Cantidad de pacientes internados por diagnóstico sintomático'
      }
  };

  public ready: Boolean = false;
  constructor(private reporteService: ReporteService) { }

  ngOnInit() {
    this.reporteService.cantidadPacientesDiagnosticoSintomatico().subscribe(
      result => {
        result.forEach(element => {
          this.pieChartData.push(element.cantidadPacientes);
          this.pieChartLabels.push(element.nombrePatologia);
        });
        this.ready = true;
      }
    );
  }

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }


}
