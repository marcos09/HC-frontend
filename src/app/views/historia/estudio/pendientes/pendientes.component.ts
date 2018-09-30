import { Component, OnInit } from '@angular/core';
import { EstudioService } from '../estudio.service';
import { Estudio } from '../estudio';

@Component({
  selector: 'app-pendientes',
  templateUrl: './pendientes.component.html',
  styleUrls: ['./pendientes.component.css']
})
export class PendientesComponent implements OnInit {

  constructor(private estudioService: EstudioService) { }
  estudios: Estudio[] = [];
  ngOnInit() {
    this.estudioService.pendientes().subscribe(
      result => {
        this.estudios = result;
      }
    );
  }

}
