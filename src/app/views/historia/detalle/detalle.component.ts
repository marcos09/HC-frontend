import { Component, OnInit } from '@angular/core';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';
import 'hammerjs';
import { HistoriaService } from '../historia.service';
import { HistoriaOrdenada } from './historia-ordenada';
import { Elemento } from './elemento';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
})
export class DetalleComponent implements OnInit {

  idHistoria: number;
  historiaResumen: Elemento[] = [];
  historiaOrdenada: HistoriaOrdenada;
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];
  count = 0;
  ngOnInit(): void {
    this.historiaService.obtenerHistoriaCompletaOrdenada(this.idHistoria).subscribe(
      result => {
        this.historiaOrdenada = result;
        console.log(this.historiaOrdenada);
      }
    );
    this.historiaService.obtenerHistoriaOrdenada(this.idHistoria).subscribe(
      result => {
        this.historiaResumen = result;
        console.log(this.historiaResumen);

      }
    );
  }

  constructor(private historiaService: HistoriaService, private route: ActivatedRoute) {
    this.route.params.subscribe( params => this.idHistoria = params['idHistoria']) ;

  }

}
