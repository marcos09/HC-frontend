import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Medicamento } from '../medicamento';

@Component({
  selector: 'app-nuevo-medicamento',
  templateUrl: './nuevo-medicamento.component.html',
  styleUrls: ['./nuevo-medicamento.component.css']
})
export class NuevoMedicamentoComponent implements OnInit {

  constructor() { }
  medicamento: Medicamento = new Medicamento();

  @Output() public addMedicamento = new EventEmitter<Medicamento>();

  ngOnInit() {
  }

  deleteData() {
    this.medicamento.nombre = '';
    this.medicamento.indicaciones = '';
    this.medicamento.contraindicaciones = '';
  }

  saveOperation() {
    this.addMedicamento.emit(this.medicamento);
    this.medicamento = new Medicamento();
  }
}
