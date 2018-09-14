import { Ingreso } from './ingreso/ingreso';
import { Seguimiento } from './seguimiento/seguimiento';
import { Egreso } from './egreso/egreso';

export class Historia {
  public ingreso: Ingreso;
  public seguimientos: Seguimiento[] = [];
  public egreso: Egreso;
}
