import { Component, OnInit, Input } from '@angular/core';
import { Seguimiento } from './seguimiento';
import { HistoriaService } from '../historia.service';

@Component({
  selector: 'app-seguimiento',
  templateUrl: './seguimiento.component.html',
})
export class SeguimientoComponent implements OnInit {

  @Input() public seguimiento: Seguimiento;
  @Input() public idElemento: number;
  public viewDeails: Boolean = true;

  constructor(private historiaService: HistoriaService) { }

  ngOnInit() {
    if (this.idElemento != null) {
      this.historiaService.getSeguimiento(this.idElemento).subscribe(
        result => {
          this.seguimiento = new Seguimiento(result);
        }
      );
    }
  }


}
