import { Estudio } from './estudio';

export class EstudioDividido {
  public estudiosFinalizados: Estudio[] = [];
  public estudiosPendientes: Estudio[] = [];

  public isEmpty() {
    return ((this.estudiosFinalizados == null) && (this.estudiosPendientes == null));
  }
}

