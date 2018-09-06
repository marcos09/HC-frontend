import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Prescripcion } from '../prescripcion';

@Component({
  selector: 'app-listado-prescripcion',
  templateUrl: './listado-prescripcion.component.html',
  styleUrls: ['./listado-prescripcion.component.css']
})
export class ListadoPrescripcionComponent implements OnInit {

  @Input() public prescripciones: Prescripcion[];
  @Output() public delete = new EventEmitter<Prescripcion>();
  @Output() public save = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }

  crearPrescripcion() {
    this.save.emit();
  }
  borrarPrescripcion(prescripcion: Prescripcion) {
    this.delete.emit(prescripcion);
  }
}
