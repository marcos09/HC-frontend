import { Component, OnInit, Input } from '@angular/core';
import { EstudioService } from '../estudio.service';
import { Estudio } from '../estudio';

@Component({
  selector: 'app-pendientes',
  templateUrl: './pendientes.component.html',
  styleUrls: ['./pendientes.component.css']
})
export class PendientesComponent implements OnInit {

  constructor(private estudioService: EstudioService) { }
  @Input() public estudios: Estudio[];

  ngOnInit() {
    if (this.estudios  == null) {
      this.estudioService.pendientes().subscribe(
        result => {
          this.estudios = result;
        }
      );
    }
  }

}
