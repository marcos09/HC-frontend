import { Component, OnInit, Input } from '@angular/core';
import { NgxGalleryImage, NgxGalleryOptions, NgxGalleryAnimation } from 'ngx-gallery';
import { Estudio } from './estudio';
import { EstudioService } from './estudio.service';

@Component({
  selector: 'app-estudio',
  templateUrl: './estudio.component.html'
})
export class EstudioComponent implements OnInit {

  @Input() public idEstudio: number;
  @Input() public estudioActual: Estudio;
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

  constructor(private estudioService: EstudioService) {}

  ngOnInit() {
    this.galleryOptions = [
      {
        // width: '600px',
        // height: '400px',
        thumbnailsColumns: 4,
        imageAnimation: NgxGalleryAnimation.Slide
      },
      // max-width 800
      {
        breakpoint: 800,
        // width: '100%',
        // height: '600px',
        imagePercent: 80,
        thumbnailsPercent: 20,
        thumbnailsMargin: 20,
        thumbnailMargin: 20
      },
      // max-width 400
      {
        breakpoint: 400,
        preview: false
      }
    ];

    this.galleryImages = [
      {
        small: 'assets/img/estudios/Rmn.jpg',
        medium: 'assets/img/estudios/Rmn.jpg',
        big: 'assets/img/estudios/Rmn.jpg'
      },
      {
        small: 'assets/img/estudios/Rx.jpg',
        medium: 'assets/img/estudios/Rx.jpg',
        big: 'assets/img/estudios/Rx.jpg'
      },
      {
        small: 'assets/img/estudios/Rmn2.jpg',
        medium: 'assets/img/estudios/Rmn2.jpg',
        big: 'assets/img/estudios/Rmn2.jpg'
      },
      {
        small: 'assets/img/estudios/Rmn4.jpg',
        medium: 'assets/img/estudios/Rmn4.jpg',
        big: 'assets/img/estudios/Rmn4.jpg'
      }
    ];

    if (this.idEstudio != null) {
      this.estudioService.obtenerEstudio(this.idEstudio.toString()).subscribe(
        result => {
          this.estudioActual = result.estudio;
        }
      );
    }
  }
}
