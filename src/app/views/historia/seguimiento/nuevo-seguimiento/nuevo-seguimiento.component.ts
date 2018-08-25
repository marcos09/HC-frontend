import { Component, OnInit } from '@angular/core';
import {Paciente} from '../../paciente/paciente';
import { Seguimiento } from '../seguimiento';
import { HistoriaService} from '../../historia.service';

@Component({
  selector: 'app-nuevo-seguimiento',
  templateUrl: './nuevo-seguimiento.component.html',
  styleUrls: ['./nuevo-seguimiento.component.css']
})
export class NuevoSeguimientoComponent implements OnInit {

  constructor(private historiaService: HistoriaService) { }
  userSearch = false;
  paciente: Paciente = null;
  idBusqueda: String = '';
  notFoundHistory = false;
  seguimiento: Seguimiento = null;
  // = new Seguimiento();

  ngOnInit() {

  }

  searchHistory() {
    console.log( 'Search history' );

    this.userSearch = true;

    // this.historiaService.obtenerPaciente(this.idBusqueda).subscribe();
      /*
      this.userService.addUser(this.user).subscribe(
        result => {
            if (result.code !== 200) {
                console.log(result);
                this.users = result;
            } else {
                this.users = result.data;
            }
        },
        error => {
            console.log(<any>error);
        }
    );

    this.getUsers();
    ^*/
    // this.userSearch = false;
  }


  }


