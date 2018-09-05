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
  userSearch: String = '';
  paciente: Paciente = null;
  idBusqueda: String = '';
  seguimiento: Seguimiento = null;

  ngOnInit() {

  }
  public updateEstudios(nuevoEstudio: Estudio[]) {
    console.log('Actualicé los estudios');
    this.seguimiento.estudiosComplementariosDTO = nuevoEstudio;
  }

  searchHistory() {
    this.userSearch = 'Buscando' ;
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

    }

     );
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
