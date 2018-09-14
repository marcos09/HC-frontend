import { Component, OnInit } from '@angular/core';
import { EstudioService } from '../estudio.service';
import { Estudio } from '../estudio';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
})
export class ResultadoComponent implements OnInit {

  constructor(private estudioService: EstudioService) { }
  estudioSearch: String = '';
  resultado: String = '';
  idBusqueda: String = '';
  estudio: Estudio = new Estudio();


  ngOnInit() {
  }


  searchEstudio() {
    this.estudioSearch = 'Buscando' ;
     this.estudioService.obtenerEstudio(this.idBusqueda).subscribe(
      result => {
        if (result.code !== 200) {
            console.log(result);
            this.estudio = result;
            this.resultado = this.estudio.informeResultado;
            this.estudioSearch = 'Encontrado';
        } else {
            this.estudio = result.data;
        }
    },
    error => {
        console.log(<any>error);

    }

     );
  }

  cargarResultado() {

    this.estudioSearch = '';
     this.estudioService.cargarResultado(this.estudio).subscribe(
      result => {
        if (result.code !== 200) {
            console.log(result);
            this.estudio = new Estudio();
            this.resultado = '';
        } else {
            this.estudio = result.data;
        }
    },
    error => {
        console.log(<any>error);

    }

     );
  }
}
