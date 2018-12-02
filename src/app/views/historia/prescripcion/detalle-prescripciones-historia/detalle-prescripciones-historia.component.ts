import { Component, OnInit, Input } from '@angular/core';
import { HistoriaService } from '../../historia.service';
import { PrescripcionesDividido } from '../prescripciones-dividido';
import { PrescripcionService } from 'src/app/views/prescripcion/prescripcion.service';
@Component({
  selector: 'app-detalle-prescripciones-historia',
  templateUrl: './detalle-prescripciones-historia.component.html',
})
export class DetallePrescripcionesHistoriaComponent implements OnInit {

  constructor(private historiaService: HistoriaService, private prescripcionService: PrescripcionService) { }

  @Input() public idHistoria;
  prescripciones: PrescripcionesDividido;


  ngOnInit() {
    this.historiaService.getPrescripciones(this.idHistoria).subscribe(
      result => {
        this.prescripciones = result;

      }
    );
  }

  aplicarPrescripcion(presc: any) {
    this.prescripcionService.aplicarPrescripcion(presc.id).subscribe(
      result => {
        this.ngOnInit();
      }
    );

  }


}
