import { Component, OnInit, Input } from '@angular/core';
import { PrescripcionService } from './prescripcion.service';
import { Prescripcion } from '../historia/prescripcion/prescripcion';

@Component({
  selector: 'app-prescripcion',
  templateUrl: './prescripcion.component.html',
})
export class PrescripcionComponent implements OnInit {

  constructor(private prescripcionService: PrescripcionService) { }
  prescripciones: Prescripcion[];
  ngOnInit() {
    if (this.prescripciones == null) {
      this.prescripcionService.getPrescripcionesActivas().subscribe(
        result => {
          this.prescripciones = result;
        },
      );
    }
  }

  aplicarPrescripcion(presc: Prescripcion) {
    this.prescripcionService.aplicarPrescripcion(presc.id).subscribe(
      result => {
        this.ngOnInit();
      }
    );

  }

}
