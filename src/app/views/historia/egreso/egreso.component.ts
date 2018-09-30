import { Component, OnInit } from '@angular/core';
import { HistoriaService } from '../historia.service';
import { Paciente } from '../ingreso/paciente';
import { Egreso } from './egreso';

@Component({
  selector: 'app-egreso',
  templateUrl: './egreso.component.html',
})
export class EgresoComponent implements OnInit {

  constructor(private historiaService: HistoriaService) { }
  userSearch: String = '';
  paciente: Paciente = null;
  idBusqueda: String = '';
  egreso: Egreso = new Egreso();
  errorResponse: String = '';

  ngOnInit() {
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

  egresarPaciente() {
    console.log( 'Egresando paciente' );
    this.userSearch = '' ;
    this.errorResponse = '';
     this.historiaService.egresarPaciente(this.egreso, this.idBusqueda).subscribe(
      result => {
        if (result.code !== 200) {
            console.log(result);
            this.egreso = new Egreso();
        } else {
            this.egreso = result.data;
        }
    },
    error => {
        console.log(<any>error);
        this.errorResponse = error.error.errors;
    }

     );
  }

}
