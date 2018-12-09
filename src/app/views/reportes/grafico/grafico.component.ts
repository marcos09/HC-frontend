import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-grafico',
  templateUrl: './grafico.component.html',
  styleUrls: ['./grafico.component.css']
})
export class GraficoComponent implements OnInit {

  chart = [];
  constructor() { }

  ngOnInit() {
    /*
    this.chart = new Chart('canvas', {
      type: 'line',
      data: {
        labels: {'weatherDates'}
        datasets: [
          {
            data: temp_max,
            borderColor: "#3cba9f",
            fill: false
          },
          {
            data: temp_min,
            borderColor: "#ffcc00",
            fill: false
          },
        ]
      },
      options: {
        legend: {
          display: false
        },
        scales: {
          xAxes: [{
            display: true
          }],
          yAxes: [{
            display: true
          }],
        }
      }
    });

  }
  */
}
}
