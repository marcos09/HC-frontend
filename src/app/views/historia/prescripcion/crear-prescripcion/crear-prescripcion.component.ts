import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Prescripcion } from '../prescripcion';

@Component({
  selector: 'app-crear-prescripcion',
  templateUrl: './crear-prescripcion.component.html',
  styleUrls: ['./crear-prescripcion.component.css']
})
export class CrearPrescripcionComponent implements OnInit {

  constructor() { }
  public prescripciones: Prescripcion[] = [];
  public  creandoPrescripcion: Boolean = false;

  @Output() public updatePrescripciones = new EventEmitter<Prescripcion[]>();

  ngOnInit() {
  }

  deleteOperation(prescripcion: Prescripcion) {
    this.prescripciones.splice(this.prescripciones.indexOf(prescripcion), 1);
    this.updatePrescripciones.emit(this.prescripciones);
  }

  saveOperation(prescripcion: Prescripcion) {
    this.prescripciones.push(prescripcion);
    this.creandoPrescripcion = false;
    this.updatePrescripciones.emit(this.prescripciones);
  }

  crearPrescripcion() {
    this.creandoPrescripcion = true;

  }

}
