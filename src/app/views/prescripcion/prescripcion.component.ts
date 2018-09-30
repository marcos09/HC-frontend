import { Component, OnInit } from '@angular/core';
import { PrescripcionService } from './prescripcion.service';
import { Prescripcion } from '../historia/prescripcion/prescripcion';

@Component({
  selector: 'app-prescripcion',
  templateUrl: './prescripcion.component.html',
  styleUrls: ['./prescripcion.component.css']
})
export class PrescripcionComponent implements OnInit {

  constructor(private prescripcionService: PrescripcionService) { }
  prescripciones: Prescripcion[] = [];
  ngOnInit() {
    this.prescripcionService.getPrescripcionesActivas().subscribe(
      result => {
        this.prescripciones = result;
      },
    );
  }

  aplicarPrescripcion(presc: Prescripcion) {
    this.prescripcionService.aplicarPrescripcion(presc.id).subscribe(
      result => {
        this.ngOnInit();
      }
    );

  }

}
