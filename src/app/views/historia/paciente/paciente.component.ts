import { Component, OnInit, Input } from '@angular/core';
import { Paciente } from './paciente';

@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.component.html',
})
export class PacienteComponent {

  @Input() public paciente: Paciente;
  @Input() public idHistoria: null;
  constructor() { }


}
