import { Patologia } from '../../patologias/patologia';
import { Prescripcion } from '../prescripcion/prescripcion';
import { Estudio } from '../estudio/estudio';

export class Ingreso {
  public id: number;
  public motivoConsulta: string;
  public enfermedadActual: string;
  public diagnosticoPresuntivo: Patologia;
  public diagnosticoSintomatico: Patologia;
  public estudiosComplementariosDTO: Estudio[] = [];
  public prescripcionesDTO: Prescripcion[] = [];
  public antecedentesEnfermedad: string;
  public antecedentesPersonales: string;
  public examenFisico: string;

}
