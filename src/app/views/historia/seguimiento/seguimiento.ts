import { Estudio } from '../estudio/estudio' ;
import { Prescripcion } from '../prescripcion/prescripcion';

export class Seguimiento {
  public id: number;
  public nroHistoria: number;
  public resultado: string;
  public estudiosComplementariosDTO: Estudio[] = [];
  public prescripcionesDTO: Prescripcion[] = [];
  public fecha: String;

  /*
  constructor() {

  }
  constructor(datos: any) {
    this.estudiosComplementariosDTO = datos.estudiosComplementariosDTO;
    this.id = datos.id;
    this.nroHistoria = datos.nroHistoria;
    this.estudiosComplementariosDTO = datos.estudiosComplementariosDTO;
    this.prescripcionesDTO = datos.prescripcionesDTO;
    this.fecha = datos.fecha;

  }
*/
  public isCompleted() {
    this.estudiosComplementariosDTO.forEach(function (value) {
      if (value.fechaResultado == null) {
        return false;
      }
    });
    this.prescripcionesDTO.forEach(function(value) {
      if (value.fechaAdministracion == null) {
        return false;
      }
    });
    return true;
  }

}
