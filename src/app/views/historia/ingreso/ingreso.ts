import { Patologia } from '../../patologias/patologia';

export class Ingreso {
  public id: number;
  public motivoConsulta: string;
  public enfermedadActual: string;
  public diagnosticoPresuntivo: Patologia;
  public diagnosticoSintomatico: Patologia;
  public estudiosComplementarios: string[] = [];
  public prescripciones: string[] = [];
  public antecedentesEnfermedad: string;
  public antecedentesPersonales: string;
  public examenFisico: string;

}
