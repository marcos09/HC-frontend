import { Component, OnInit } from '@angular/core';
import { HistoriaService } from '../../historia.service';
import { ActivatedRoute } from '@angular/router';
import { Seguimiento } from '../seguimiento';
import { Estudio } from '../../estudio/estudio';
import { Prescripcion } from '../../prescripcion/prescripcion';
import { EstudioDividido } from '../../estudio/estudio-dividido';
import { PrescripcionesDividido } from '../../prescripcion/prescripciones-dividido';

@Component({
  selector: 'app-detalle-completo',
  templateUrl: './detalle-completo.component.html',
})
export class DetalleCompletoComponent implements OnInit {
  idSeguimiento: number;
  seguimiento: Seguimiento;

  estudiosFinalizados: Estudio[] = [];
  estudiosPendientes:  Estudio[] = [];
  prescripcionesFinalizadas: Prescripcion[] = [];
  prescripcionesPendientes:  Prescripcion[] = [];

  isCompleted: Boolean = false;
  estudiosDivididos: EstudioDividido = new EstudioDividido();
  prescripcionesDivididas: PrescripcionesDividido = new PrescripcionesDividido();

  constructor(private historiaService: HistoriaService, private route: ActivatedRoute) {
    this.route.params.subscribe( params => this.idSeguimiento = params['idSeguimiento']) ;
   }

  ngOnInit() {
    this.historiaService.getSeguimiento(this.idSeguimiento).subscribe(
      result => {
        this.seguimiento = new Seguimiento(result);
        this.seguimiento.estudiosComplementariosDTO.forEach( estudio => {
          if ( estudio.fechaResultado == null ) {
            this.estudiosPendientes.push(estudio);
          } else {
            this.estudiosFinalizados.push(estudio);
          }
        });
        this.estudiosDivididos.estudiosPendientes  = this.estudiosPendientes;
        this.estudiosDivididos.estudiosFinalizados = this.estudiosFinalizados;

        this.seguimiento.prescripcionesDTO.forEach(element => {
          if (element.fechaAdministracion == null) {
            this.prescripcionesPendientes.push(element);
          } else {
            this.prescripcionesFinalizadas.push(element);
          }
        });

        this.prescripcionesDivididas.finalizadas = this.prescripcionesFinalizadas;
        this.prescripcionesDivididas.pendientes = this.prescripcionesPendientes;
        this.isCompleted = true;
      }
    );

  }

}
