import { Estudio } from '../estudio/estudio';
import { Prescripcion } from '../prescripcion/prescripcion';

export class Seguimiento {
  public id: number;
  public nroHistoria: number;
  public resultado: string;
  public estudiosComplementariosDTO: Estudio[] = [];
  public prescripcionesDTO: Prescripcion[] = [];
  public fecha: String;
  public isCompleted: Boolean;

  public isCompletedMethod(): Boolean {
    this.estudiosComplementariosDTO.forEach(function(value) {
      if (!value.informeResultado) {
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
    if (object !== undefined) {
      this.id = object.id;
      this.nroHistoria = object.nroHistoria;
      this.resultado = object.resultado;
      this.estudiosComplementariosDTO = object.estudiosComplementariosDTO;
      this.prescripcionesDTO = object.prescripcionesDTO;
      this.fecha = object.fecha;
      this.isCompleted = object.isCompleted;
    }
  }
}
