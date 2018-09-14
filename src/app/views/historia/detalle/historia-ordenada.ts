import { Historia } from '../historia';
import { Prescripcion } from '../prescripcion/prescripcion';
import { Estudio } from '../estudio/estudio';

export class HistoriaOrdenada extends Historia {
  public aplicaciones: Prescripcion[] = [];
  public estudios: Estudio[] = [];

  // Método que retorna la cantidad de elementos que se deberán mostrar en la visualización de la
  // historia completa. Está dado en función del número de sequimientos + cantidad de prescripciones
  // que fueron aplicadas + cantidad de estudios resueltos. Dicho número se utilizará para saber cuantos
  // componentes se deberán cargar en la vista de la historia.
  getNumberOfElements(): number {
    let count = 0;
    this.estudios.forEach(function(value) {
      if (value.informeResultado != null) {
        count++;
      }
    });

    this.aplicaciones.forEach(function(value) {
      if (value.fechaAdministracion != null) {
        count++;
      }
    });
    count += this.seguimientos.length;
    return count;
  }
}
