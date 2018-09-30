import { Component, OnInit } from '@angular/core';
import { EstudioService } from '../estudio.service';
import { Estudio } from '../estudio';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
})
export class ResultadoComponent implements OnInit {

  constructor(private estudioService: EstudioService, private route: ActivatedRoute, private router: Router) { }
  estudioSearch: String = '';
  resultado: String = '';
  idBusqueda: String = '';
  estudio: Estudio = new Estudio();


  ngOnInit() {
    this.idBusqueda = this.route.snapshot.queryParamMap.get('idEstudio');
    console.log(this.idBusqueda);
    if (this.idBusqueda != null) {
      this.searchEstudio();
    }

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
          this.router.navigate(['historias/estudio/pendientes']);
    },
    error => {
        console.log(<any>error);

    }

     );
  }
}
