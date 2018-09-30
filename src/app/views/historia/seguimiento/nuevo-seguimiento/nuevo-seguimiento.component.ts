import { Component, OnInit } from '@angular/core';
import {Paciente} from '../../paciente/paciente';
import { Seguimiento } from '../seguimiento';
import { HistoriaService} from '../../historia.service';
import { Estudio } from '../../estudio/estudio';
import { Prescripcion } from '../../prescripcion/prescripcion';


@Component({
  selector: 'app-nuevo-seguimiento',
  templateUrl: './nuevo-seguimiento.component.html',
})
export class NuevoSeguimientoComponent implements OnInit {

  constructor(private historiaService: HistoriaService) { }
  userSearch: String = '';
  paciente: Paciente = null;
  idBusqueda: String = '';
  seguimiento: Seguimiento = null;
  errorResponse: String = '';
  successResponse: String = '';

  ngOnInit() {

  }
  public updateEstudios(nuevoEstudio: Estudio[]) {
    console.log('Actualicé los estudios');
    this.seguimiento.estudiosComplementariosDTO = nuevoEstudio;
  }

  public updatePrescripciones(prescripciones: Prescripcion[]) {
    this.seguimiento.prescripcionesDTO = prescripciones;
  }
  searchHistory() {
    this.userSearch = 'Buscando' ;
    this.errorResponse = '';
    console.log( 'Search history' );
     this.historiaService.obtenerPaciente(this.idBusqueda).subscribe(
      result => {
        if (result.code !== 200) {
            console.log(result);
            this.paciente = result;
            this.seguimiento = new Seguimiento();
            this.userSearch = 'Encontrado';
        } else {
            this.paciente = result.data;
        }
    },
    error => {
        console.log(<any>error);
        this.errorResponse = error.error.errors;
    }

     );
  }
  saveOperation() {
    console.log( 'El valor del seguimiento a agregar es: ');
    console.log(this.seguimiento);
    this.userSearch = '';
    this.historiaService.addSeguimiento(this.seguimiento, this.idBusqueda).subscribe(
              result => {
                      console.log(result);
                      this.successResponse = 'El seguimiento fue agregado correctamente';
              },
              error => {
                  console.log(<any>error);
                  this.errorResponse = error.error.errors;
              }
          );
  }

  }
