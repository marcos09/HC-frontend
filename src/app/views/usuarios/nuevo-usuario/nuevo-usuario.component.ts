import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Usuario } from '../usuario';
import { UsuarioService } from '../usuario.service';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-nuevo-usuario',
  templateUrl: './nuevo-usuario.component.html',
})
export class NuevoUsuarioComponent implements OnInit {

  myForm: FormGroup;
  @Output() public addUser = new EventEmitter<Usuario>();

  public availableRoles: String[] = [
    'Médico',
    'Enfermera',
    'Epidemiólogo',
    'Administrador'
  ];


  public usuario: Usuario = new Usuario();
  constructor(private userService: UsuarioService, private formBuilder: FormBuilder
    ) {
      this.myForm = this.formBuilder.group({
        username: ['', [Validators.required]],
        email: ['', [Validators.required]],
        authorities: ['', [Validators.required]],
      });

    }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {


  }

  saveOperation() {
    this.addUser.emit(this.usuario);
    this.usuario = new Usuario();
  }

  deleteData() {
    this.usuario = new Usuario();
  }
}
