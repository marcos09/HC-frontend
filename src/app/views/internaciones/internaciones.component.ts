import { Component, OnInit } from '@angular/core';
import { HistoriaService } from '../historia/historia.service';
import { HistoriaCompacta } from './historia-compacta';

@Component({
  selector: 'app-internaciones',
  templateUrl: './internaciones.component.html',
})
export class InternacionesComponent implements OnInit {

  internaciones: HistoriaCompacta[] = [];
  constructor(private historiaService: HistoriaService) { }

  ngOnInit() {
    this.historiaService.obtenerHistoriasActivas().subscribe(
      result => {
        if (result.code !== 200) {
            this.internaciones = result;
        } else {
            this.internaciones = result.data;
        }
    },
    );
  }

}
