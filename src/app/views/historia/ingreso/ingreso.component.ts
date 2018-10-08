import { Component, OnInit, Input } from '@angular/core';
import { Ingreso } from './ingreso';
import { HistoriaService } from '../historia.service';
import { Paciente } from '../paciente/paciente';

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.component.html',
})
export class IngresoComponent implements OnInit {

  public paciente: Paciente;
  public ingreso: Ingreso;
  @Input() public idHistoria: number;
  constructor(private historiaService: HistoriaService) { }

  ngOnInit() {
    this.historiaService.getIngreso(this.idHistoria).subscribe(
      result => {
        this.ingreso = result;
      }
    );
    this.historiaService.obtenerPaciente(this.idHistoria.toString()).subscribe(
      result => {
        this.paciente = result;
      }
    );

  }


}
