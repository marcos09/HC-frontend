import { Component, OnInit } from '@angular/core';
import { MedicamentoService } from './medicamento.service';
import { Medicamento } from './medicamento';

@Component({
  selector: 'app-medicamentos',
  templateUrl: './medicamentos.component.html',
  styleUrls: ['./medicamentos.component.css']
})
export class MedicamentosComponent implements OnInit {


  constructor(private medicamentoService: MedicamentoService) { }


  medicamentos: Medicamento[] = [];
  ngOnInit() {
    this.obtenerMedicamentos();
  }

  addMedicamento(medicamento: Medicamento) {
    console.log(medicamento);
    this.medicamentoService.saveOperation(medicamento).subscribe(
      result => {
        this.obtenerMedicamentos();
      }
    );
  }

  obtenerMedicamentos() {
    this.medicamentoService.obtenerMedicamentos().subscribe(
      result => {
        this.medicamentos = result;
      },
    );

  }

}
