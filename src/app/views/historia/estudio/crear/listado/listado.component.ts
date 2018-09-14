import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Estudio } from '../../estudio';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // tslint:disable-next-line:member-ordering
  @Input() public estudios: Estudio[] = [];

  // tslint:disable-next-line:member-ordering
  @Output() public crearNuevoEstudio = new EventEmitter<null>();
  // tslint:disable-next-line:member-ordering
  @Output() public eliminarEstudio = new EventEmitter<Estudio>();

  crearEstudio() {
    this.crearNuevoEstudio.emit();
  }
  borrarEstudio(estudio: Estudio) {
    this.eliminarEstudio.emit(estudio);
  }
}
