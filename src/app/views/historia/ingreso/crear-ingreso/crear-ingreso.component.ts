import { Component, OnInit } from '@angular/core';
import { Ingreso } from '../ingreso';
import { HistoriaService } from '../../historia.service';
import { PacienteService } from '../../paciente/paciente.service';
import { Paciente } from '../../paciente/paciente';
import { Patologia } from '../../../patologias/patologia';
import { PatologiaService } from '../../../patologias/patologia.service';
import { Estudio } from '../../estudio/estudio';
import { Prescripcion } from '../../prescripcion/prescripcion';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
@Component({
  selector: 'app-crear-ingreso',
  templateUrl: './crear-ingreso.component.html',
})
export class CrearIngresoComponent implements OnInit {

  ingreso: Ingreso = new Ingreso();
  paciente: Paciente = new Paciente();
  pacientSearch = false;
  continue = false;
  idBusqueda: String = '';
  public diagnosticos: Patologia[] = [];
  errorResponse: String = '';

  constructor(private historiaService: HistoriaService , private pacienteService: PacienteService,
     private patologiaService: PatologiaService, private flashMessagesService: FlashMessagesService,
     private router: Router) { }

  ngOnInit() {
    this.getDiagnosticos();
  }

  public updateEstudios(nuevoEstudio: Estudio[]) {
    this.ingreso.estudiosComplementariosDTO = nuevoEstudio;
  }

  public updatePrescripciones(nuevaPrescripcion: Prescripcion[]) {
    this.ingreso.prescripcionesDTO = nuevaPrescripcion;
  }

  getDiagnosticos() {
    this.errorResponse = '';
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
    this.errorResponse = '';
    this.historiaService.crear(this.ingreso, this.paciente.id).subscribe(
        result => {
            this.flashMessagesService.show('El paciente se ingresó correctamente', { cssClass: 'alert-success', timeout: 1000 });
            this.router.navigate(['/internaciones']);
      },
      error => {
          this.flashMessagesService.show('Hubo un error al ingresar al paciente', { cssClass: 'alert-danger', timeout: 1000 });
          console.log(<any>error);
          this.errorResponse = 'Todos los campos son obligatorios';
          this.continue = false;
      }
    );

  }

  searchPacient() {
    this.pacientSearch = true;
    this.continue = false;
    this.errorResponse = '';
    this.paciente = new Paciente();
     this.pacienteService.obtenerPaciente(this.idBusqueda).subscribe(
      result => {
        if (result.code !== 200) {
            this.paciente = result;
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
