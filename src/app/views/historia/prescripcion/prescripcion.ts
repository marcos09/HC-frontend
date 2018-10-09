import { Medicamento } from '../../medicamentos/medicamento';

export class Prescripcion {
  public id: number;
  public fechaIndicacion: String;
  public datos: String;
  public medicamento: Medicamento;
  public fechaAdministracion: String = '';
}
