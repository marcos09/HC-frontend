import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Estudio } from '../estudio';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent implements OnInit {

  @Output() public updateEstudios = new EventEmitter<Estudio[]>();
  estudios: Estudio[] = [];
  creandoEstudio: Boolean = false;
  constructor() { }

  ngOnInit() {
  }

  crearNuevoEstudio() {
    this.creandoEstudio = true;
  }

  deleteEstudio() {

  }

  public addEstudio(estudio: Estudio) {
    this.estudios.push(estudio);
    this.creandoEstudio = false;
    this.updateEstudios.emit(this.estudios);
  }
  public eliminarEstudio(estudio: Estudio) {
    this.estudios.splice(this.estudios.indexOf(estudio), 1);
    this.updateEstudios.emit(this.estudios);
  }

}
