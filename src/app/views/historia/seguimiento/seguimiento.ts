import { Estudio } from '../estudio/estudio' ;
import { Prescripcion } from '../prescripcion/prescripcion';

export class Seguimiento {
  public id: number;
  public nroHistoria: number;
  public resultado: string;
  public estudiosComplementariosDTO: Estudio[] = [];
  public prescripcionesDTO: Prescripcion[] = [];
  public fecha: String;

}
