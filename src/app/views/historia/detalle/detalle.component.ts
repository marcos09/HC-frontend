import { Component, OnInit } from '@angular/core';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';
import 'hammerjs';
import { HistoriaService } from '../historia.service';
import { HistoriaOrdenada } from './historia-ordenada';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
})
export class DetalleComponent implements OnInit {

  historiaOrdenada: HistoriaOrdenada;
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];
  count = 0;
  ngOnInit(): void {
    this.historiaService.obtenerHistoriaOrdenada(1).subscribe(
      result => {
        this.historiaOrdenada = result;
        console.log('Pre error');
        // this.count = this.historiaOrdenada.getNumberOfElements();
        console.log(this.count);
      }
    );
  }

  constructor(private historiaService: HistoriaService) { }

}
