import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Prescripcion } from '../../prescripcion';
import { Medicamento } from '../../../../medicamentos/medicamento';
import { MedicamentoService } from '../../../../medicamentos/medicamento.service';

@Component({
  selector: 'app-nueva-prescripcion',
  templateUrl: './nueva-prescripcion.component.html',
})
export class NuevaPrescripcionComponent implements OnInit {

  public prescripcion: Prescripcion = new Prescripcion();
  public medicamentos: Medicamento[] = [];
  @Output() public addPrescripcion = new EventEmitter<Prescripcion>();

  constructor(private medicamentoService: MedicamentoService) { }


  ngOnInit() {
    this.medicamentoService.obtenerMedicamentos().subscribe(
      result => {
        if (result.code !== 200) {
          this.medicamentos = result;
        } else {
          console.log(result);
        }
    },
    error => {
      console.log('Error al solicitar los medicamentos');
        console.log(<any>error);
      }
    );
  }

  saveOperation() {
    this.addPrescripcion.emit(this.prescripcion);
    this.prescripcion = new Prescripcion();
  }
}
