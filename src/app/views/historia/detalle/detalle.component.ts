import { Component, OnInit } from '@angular/core';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';
import 'hammerjs';
import { HistoriaService } from '../historia.service';
import { HistoriaOrdenada } from './historia-ordenada';
import { Seguimiento } from '../seguimiento/seguimiento';
import { Elemento } from './elemento';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
})
export class DetalleComponent implements OnInit {


  historiaResumen: Elemento[] = [];
  historiaOrdenada: HistoriaOrdenada;
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];
  count = 0;
  ngOnInit(): void {
    this.historiaService.obtenerHistoriaCompletaOrdenada(1).subscribe(
      result => {
        this.historiaOrdenada = result;
        console.log(this.historiaOrdenada);
      }
    );
    this.historiaService.obtenerHistoriaOrdenada(1).subscribe(
      result => {
        this.historiaResumen = result;
        console.log(this.historiaResumen);

      }
    );
  }

  constructor(private historiaService: HistoriaService) { }

}
