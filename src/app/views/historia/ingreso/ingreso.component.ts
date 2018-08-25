import { Component, OnInit } from '@angular/core';
import { Ingreso } from './ingreso';
import { HistoriaService } from '../historia.service';
import { Paciente } from './paciente';
@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.component.html',
  styleUrls: ['./ingreso.component.css']
})
export class IngresoComponent implements OnInit {

  ingreso: Ingreso = new Ingreso();
  paciente: Paciente = new Paciente();
  constructor(private historiaService: HistoriaService ) { }

  ngOnInit() {

  }

  saveOperation() {
    this.historiaService.crear(this.ingreso).subscribe(
        result => {
        console.log(result);
          if (result.code !== 200) {
            console.log('Agregado');
          } else {
              console.log('Error');
          }
      },
      error => {
          console.log(<any>error);
      }
    );

  }

}
