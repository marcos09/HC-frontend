import { Component, OnInit } from '@angular/core';
import { Usuario } from '../Usuario';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {

  constructor(private userService: UsuarioService) { }
  usuario: Usuario = new Usuario();
  ngOnInit() {
  }

}
