import { Component, OnInit } from '@angular/core';
import { ReporteService } from '../reporte.service';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html'
})
export class LineChartComponent implements OnInit {


  public lineChartData: Array<any> = [
    {data: [], label: 'Cantidad de ingresos'},
    {data: [], label: 'Cantidad de egresos'},
    {data: [], label: 'Cantidad de seguimientos'}
  ];

  public lineChartLabels: Array<any> = [];

  public lineChartOptions: any = {
    responsive: true
  };

  public lineChartColors: Array<any> = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  public lineChartLegend = true;
  public lineChartType = 'line';
  public ready: Boolean = false;
  public ready2: Boolean = false;
  public ready3: Boolean = false;

  constructor(private reporteService: ReporteService) { }


  ngOnInit() {
    this.reporteService.egresosPorMes().subscribe(
      result => {
        console.log(result);
        result.forEach(element => {
          this.lineChartData[1].data.push(element.cantidad);
          this.lineChartLabels.push(element.monthString);
        });
        this.ready = true;
      }
    );

    this.reporteService.IngresosPorMes().subscribe(
      result => {
        console.log(result);
        result.forEach(element => {
          this.lineChartData[0].data.push(element.cantidad);
        });
        this.ready2 = true;

      }
    );

    this.reporteService.IngresosPorMes().subscribe(
      result => {
        console.log(result);
        result.forEach(element => {
          this.lineChartData[2].data.push(element.cantidad);
        });
        this.ready3 = true;

      }
    );


  }

  public chartClicked(e: any): void {
      console.log(e);
    }

    public chartHovered(e: any): void {
      console.log(e);
    }
  }
