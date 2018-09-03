import { Estudio } from '../estudio/estudio' ;

export class Seguimiento {
  public id: number;
  public nroHistoria: number;
  public resultado: string;
  public estudiosComplementariosDTO: Estudio[] = [];
  public prescripciones: string[] = [];

}
