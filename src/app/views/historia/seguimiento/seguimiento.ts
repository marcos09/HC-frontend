import { Estudio } from '../estudio/estudio' ;
import { Prescripcion } from '../prescripcion/prescripcion';
import { isNullOrUndefined } from 'util';

export class Seguimiento {
  public id: number;
  public nroHistoria: number;
  public resultado: string;
  public estudiosComplementariosDTO: Estudio[] = [];
  public prescripcionesDTO: Prescripcion[] = [];
  public fecha: String;

  public isCompleted(): boolean {

    this.estudiosComplementariosDTO.forEach(function (value) {
      if (Boolean(value.fechaResultado)) {
        return false;
      }
    });
    this.prescripcionesDTO.forEach(function(value) {
      if (Boolean(value.fechaAdministracion)) {
        return false;
      }
    });
    return true;
  }

  constructor(object?: any) {
    this.id = object.id;
    this.nroHistoria = object.nroHistoria;
    this.resultado = object.resultado;
    this.estudiosComplementariosDTO = object.estudiosComplementariosDTO;
    this.prescripcionesDTO = object.prescripcionesDTO;
    this.fecha = object.fecha;

  }

}
