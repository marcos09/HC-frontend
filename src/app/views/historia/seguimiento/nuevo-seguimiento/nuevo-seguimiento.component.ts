import { Component, OnInit } from '@angular/core';
import {Paciente} from '../../paciente/paciente';
import { Seguimiento } from '../seguimiento';
import { HistoriaService} from '../../historia.service';
import { Estudio } from '../../estudio/estudio';

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
  public addEstudio(nuevoEstudio: Estudio) {
    console.log('Agregué el estudio');
    console.log(nuevoEstudio);
    this.seguimiento.estudiosComplementariosDTO.push(nuevoEstudio);
  }

  searchHistory() {
    this.userSearch = true;
    console.log( 'Search history' );
     this.historiaService.obtenerPaciente(this.idBusqueda).subscribe(
      result => {
        if (result.code !== 200) {
            console.log(result);
            this.paciente = result;
            this.userSearch = false;
            this.seguimiento = new Seguimiento();
        } else {
            this.paciente = result.data;
        }
    },
    error => {
        console.log(<any>error);
    }

     );
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
  saveOperation() {
    console.log( 'El valor del seguimiento a agregar es: ');
    console.log(this.seguimiento);
    this.historiaService.addSeguimiento(this.seguimiento, this.idBusqueda).subscribe(
              result => {
                  if (result.code !== 200) {
                      console.log(result);
                   //   this.users = result;
                  } else {
                    //  this.users = result.data;
                  }
              },
              error => {
                  console.log(<any>error);
              }
          );
  }

  }


