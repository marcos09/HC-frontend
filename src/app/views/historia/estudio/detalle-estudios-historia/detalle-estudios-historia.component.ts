import { Component, OnInit, Input } from '@angular/core';
import { HistoriaService } from '../../historia.service';
import { EstudioDividido } from '../estudio-dividido';

@Component({
  selector: 'app-detalle-estudios-historia',
  templateUrl: './detalle-estudios-historia.component.html',
})
export class DetalleEstudiosHistoriaComponent implements OnInit {


  constructor(private historiaService: HistoriaService) { }
  estudios: EstudioDividido;
  @Input() public idHistoria: number;

  ngOnInit() {

    this.historiaService.getEstudios(this.idHistoria).subscribe(
      result => {
        this.estudios = result;
        console.log(result);
      }
    );

  }

}
