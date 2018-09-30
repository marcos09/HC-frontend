import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Medicamento } from '../medicamento';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-nuevo-medicamento',
  templateUrl: './nuevo-medicamento.component.html',
  styleUrls: ['./nuevo-medicamento.component.css']
})
export class NuevoMedicamentoComponent implements OnInit {

  myForm: FormGroup;
  constructor(public formBuilder: FormBuilder) {
    this.myForm = this.formBuilder.group({
      nombre: ['', [Validators.required]],
      indicaciones: ['', [Validators.required, Validators.minLength(3)]],
      contraindicaciones: ['', [Validators.required, Validators.minLength(3)]],
    });

   }
  @Output() public addMedicamento = new EventEmitter<Medicamento>();

  ngOnInit() {
  }

  deleteData() {
    this.myForm.reset();
  }

  saveOperation(formValue: any) {
    this.addMedicamento.emit(formValue);
  }
}
