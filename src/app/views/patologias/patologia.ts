export class Patologia {
  public id: number;
  public nombre: string;
  public otroDato: string;
  public father: Patologia;
  public childs: Patologia[] = [];
}
