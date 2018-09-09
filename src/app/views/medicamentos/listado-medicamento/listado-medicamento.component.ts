import { Component, OnInit, Input } from '@angular/core';
import { Medicamento } from '../medicamento';

@Component({
  selector: 'app-listado-medicamento',
  templateUrl: './listado-medicamento.component.html',
  styleUrls: ['./listado-medicamento.component.css']
})
export class ListadoMedicamentoComponent implements OnInit {

  constructor() { }

  @Input() public medicamentos: Medicamento[];
  ngOnInit() {
  }

}
