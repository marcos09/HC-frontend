import { Component, OnInit } from '@angular/core';
import {Paciente} from '../../paciente/paciente';
import { Seguimiento } from '../seguimiento';
import { HistoriaService} from '../../historia.service';
import { Estudio } from '../../estudio/estudio';
import { Prescripcion } from '../../prescripcion/prescripcion';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-nuevo-seguimiento',
  templateUrl: './nuevo-seguimiento.component.html',
})
export class NuevoSeguimientoComponent implements OnInit {

  constructor(private historiaService: HistoriaService, private route: ActivatedRoute,
    private router: Router) { }
  userSearch: String = '';
  datosPaciente: Paciente = null;
  idBusqueda: String = '';
  seguimiento: Seguimiento = null;
  errorResponse: String = '';
  successResponse: String = '';

  ngOnInit() {
    this.idBusqueda = this.route.snapshot.queryParamMap.get('idHistoria');
    console.log(this.idBusqueda);
    if (this.idBusqueda != null) {
      this.searchHistory();
    }

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
            if (result.egreso != null) {
              this.errorResponse = 'El paciente ya egreso';
              this.userSearch = '';
            } else {
              this.datosPaciente = result.paciente;
              this.seguimiento = new Seguimiento();
              this.userSearch = 'Encontrado';
            }
        } else {
            this.datosPaciente = result.data;
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
                      this.router.navigate(['/historias/detalle/', this.idBusqueda]);
              },
              error => {
                  console.log(<any>error);
                  this.errorResponse = error.error.errors;
              }
          );
  }

  }
