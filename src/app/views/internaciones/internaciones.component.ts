import { Component, OnInit } from '@angular/core';
import { HistoriaService } from '../historia/historia.service';
import { HistoriaCompacta } from './historia-compacta';

@Component({
  selector: 'app-internaciones',
  templateUrl: './internaciones.component.html',
  styleUrls: ['./internaciones.component.css']
})
export class InternacionesComponent implements OnInit {

  internaciones: HistoriaCompacta[] = [];
  constructor(private historiaService: HistoriaService) { }

  ngOnInit() {
    this.historiaService.obtenerHistoriasActivas().subscribe(
      result => {
        if (result.code !== 200) {
            console.log(result);
            this.internaciones = result;
            console.log(this.internaciones);
        } else {
            this.internaciones = result.data;
            console.log(this.internaciones);
        }
    },
    );
  }

}
