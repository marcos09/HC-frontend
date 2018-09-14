import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
})
export class BuscarComponent implements OnInit {

  constructor(private userService: UsuarioService) { }
  usuario: Usuario = new Usuario();
  ngOnInit() {
  }

}
