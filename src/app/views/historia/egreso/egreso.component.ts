import { Component, OnInit } from '@angular/core';
import { HistoriaService } from '../historia.service';
// import { Paciente } from '../ingreso/paciente';
import { Egreso } from './egreso';
import { ActivatedRoute, Router } from '@angular/router';
import { Paciente } from '../paciente/paciente';

@Component({
  selector: 'app-egreso',
  templateUrl: './egreso.component.html',
})
export class EgresoComponent implements OnInit {

  constructor(private historiaService: HistoriaService, private route: ActivatedRoute,
    private router: Router  ) { }
  userSearch: String = '';
  paciente: Paciente = null;
  idBusqueda: String = '';
  egreso: Egreso = new Egreso();
  errorResponse: String = '';
  diagnosticoFinal: String;

  ngOnInit() {
  this.idBusqueda = this.route.snapshot.queryParamMap.get('idHistoria');
  console.log(this.idBusqueda);
  if (this.idBusqueda != null) {
    this.searchHistory();
    this.diagnosticoFinal = null;
  }

}

searchHistory() {
    this.userSearch = 'Buscando' ;
    this.errorResponse = '';
    this.egreso = new Egreso();
    this.diagnosticoFinal = null;
    console.log( 'Search history' );
     this.historiaService.obtenerPaciente(this.idBusqueda).subscribe(
      result => {
            console.log(result);
            this.paciente = result.paciente;
            if (result.egreso != null) {
              this.egreso = result.egreso;
              this.diagnosticoFinal = result.egreso.diagnosticoFinal;
            }
            console.log(this.diagnosticoFinal);
            this.userSearch = 'Encontrado';
    },
    error => {
        console.log(<any>error);
        this.errorResponse = error.error.errors;
    }

     );
  }

  egresarPaciente() {
    this.userSearch = '' ;
    this.errorResponse = '';
    this.diagnosticoFinal = null;
     this.historiaService.egresarPaciente(this.egreso, this.idBusqueda).subscribe(
      result => {
        this.router.navigate(['/internaciones']);
       },
      error => {
        console.log(<any>error);
        this.errorResponse = error.error.errors;
       }
     );
  }

}
