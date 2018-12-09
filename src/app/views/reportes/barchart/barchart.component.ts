import { Component, OnInit } from '@angular/core';
import { ReporteService } from '../reporte.service';
import { Medicamento } from '../../medicamentos/medicamento';

@Component({
  selector: 'app-barchart',
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.css']
})
export class BarchartComponent implements OnInit {

  public ready: Boolean = false;
  public barChartLegend: Boolean = false;


  public barChartOptions: any = {
    scaleShowVerticalLines: true,
    responsive: true,
    xAxisID: 'Medicamento',
    yAxisID: 'Cantidad',

    legend: {
        position: 'top',
    },
    hover: {
        mode: 'label'
    },
    scales: {
        xAxes: [{
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: 'Medicamento'
                }
            }],
        yAxes: [{
                display: true,

                ticks: {
                    beginAtZero: true,
                    steps: 1,
                    stepValue: 5,
                    max: 5
                }
            }]
    },
    title: {
        display: true,
        position: 'top',
        text: 'Cantidad de prescripciones por medicamento'
    }
  };
  public barChartLabels: String[] = [];
  public barChartType: String = 'bar';
  public barChartData: number[] = [];


  constructor(private reporteService: ReporteService) { }

  ngOnInit() {
    this.reporteService.cantidadPrescripcionesMedicamento().subscribe(
      result => {
        console.log(result);
        result.forEach(element => {
          this.barChartLabels.push(element.nombreMedicamento);
          this.barChartData.push(element.cantidadPrescripciones);
          this.ready = true;
        });

      }
    );

  }

  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }

}
