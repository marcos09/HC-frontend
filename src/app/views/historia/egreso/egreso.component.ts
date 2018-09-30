import { Component, OnInit } from '@angular/core';
import { HistoriaService } from '../historia.service';
import { Paciente } from '../ingreso/paciente';
import { Egreso } from './egreso';
import { ActivatedRoute, Router } from '@angular/router';

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

  ngOnInit() {
    this.idBusqueda = this.route.snapshot.queryParamMap.get('idHistoria');
    console.log(this.idBusqueda);
    if (this.idBusqueda != null) {
      this.searchHistory();
    }

  }

  searchHistory() {
    this.userSearch = 'Buscando' ;
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

    }

     );
  }

  egresarPaciente() {
    this.userSearch = '' ;
     this.historiaService.egresarPaciente(this.egreso, this.idBusqueda).subscribe(
      result => {
        this.router.navigate(['/internaciones']);
      },
    );
  }

}
