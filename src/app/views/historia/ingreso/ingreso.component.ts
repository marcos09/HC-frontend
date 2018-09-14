import { Component, OnInit } from '@angular/core';
import { Ingreso } from './ingreso';
import { HistoriaService } from '../historia.service';

import { PacienteService } from '../paciente/paciente.service';
import { Paciente } from '../paciente/paciente';
import { Patologia } from '../../patologias/patologia';
import { PatologiaService } from '../../patologias/patologia.service';
import { Estudio } from '../estudio/estudio';
import { Prescripcion } from '../prescripcion/prescripcion';
@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.component.html',
})
export class IngresoComponent implements OnInit {

  ingreso: Ingreso = new Ingreso();
  paciente: Paciente = new Paciente();
  pacientSearch = false;
  continue = false;
  idBusqueda: String = '';
  public diagnosticos: Patologia[] = [];

  constructor(private historiaService: HistoriaService , private pacienteService: PacienteService,
     private patologiaService: PatologiaService) { }

  ngOnInit() {
    this.getDiagnosticos();
  }

  public updateEstudios(nuevoEstudio: Estudio[]) {
    console.log('Actualicé los estudios');
    this.ingreso.estudiosComplementariosDTO = nuevoEstudio;
  }

  public updatePrescripciones(nuevaPrescripcion: Prescripcion[]) {
    console.log('Actualicé las prescripciones');
    this.ingreso.prescripcionesDTO = nuevaPrescripcion;
  }

  getDiagnosticos() {
    this.patologiaService.getPatologias().subscribe(
      result => {
          if (result.code !== 200) {
              console.log(result);
              this.diagnosticos = result;
          } else {
              this.diagnosticos = result.data;
          }
      },
      error => {
          console.log(<any>error);
      }
  );
  }

  saveOperation() {
    this.historiaService.crear(this.ingreso, this.paciente.id).subscribe(
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

  searchPacient() {
    this.pacientSearch = true;
    this.continue = false;
    this.paciente = new Paciente();
    console.log( 'Search pacient' );
     this.pacienteService.obtenerPaciente(this.idBusqueda).subscribe(
      result => {
        if (result.code !== 200) {
            console.log(result);
            this.paciente = result;
            console.log(this.paciente);
        } else {
            this.paciente = result.data;
        }
    },
    error => {
        console.log(<any>error);
    }

     );
    }

  continueOperation() {
      this.continue = true;
      this.pacientSearch = false;
      console.log( 'Actualizo datos del paciente' );
      this.pacienteService.updatePaciente(this.paciente).subscribe(
       result => {
         if (result.code !== 200) {
           this.paciente = result;
             console.log(result);
         } else {
             this.paciente = result;
         }
     },
     error => {
         console.log(<any>error);
     }

      );
    }


}
