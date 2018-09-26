export class Usuario {

  public id: number;
  public username: String = '';
  public email: String = '';
  public authorities: String = '';

  isEmpty(): Boolean {
    if (this.username.length === 0  && this.email.length === 0 && this.authorities.length === 0 ) {
      console.log('False');
      return false;
    }
    console.log('true');
    return true;
  }
}
