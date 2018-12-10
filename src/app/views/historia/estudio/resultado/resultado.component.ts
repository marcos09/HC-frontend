import { Component, OnInit } from '@angular/core';
import { EstudioService } from '../estudio.service';
import { Estudio } from '../estudio';
import { ActivatedRoute, Router } from '@angular/router';
import { Paciente } from '../../paciente/paciente';
import { FileUploader } from 'ng2-file-upload';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
})
export class ResultadoComponent implements OnInit {

  public uploader: FileUploader = new FileUploader({url: environment.url + '/' , itemAlias: 'photo'});

  constructor(private estudioService: EstudioService, private route: ActivatedRoute, private router: Router) { }
  estudioSearch: String = '';
  resultado: String = '';
  idBusqueda: String = '';
  estudio: Estudio = new Estudio();
  paciente: Paciente = new Paciente();
  errorResponse: String = '';


  ngOnInit() {
    this.idBusqueda = this.route.snapshot.queryParamMap.get('idEstudio');
    console.log(this.idBusqueda);
    if (this.idBusqueda != null) {
      this.searchEstudio();
    }
    this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };
    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
         console.log('ImageUpload:uploaded:', item, status, response);
         alert('File uploaded successfully');
     };

  }


  searchEstudio() {
    this.estudioSearch = 'Buscando' ;
    this.errorResponse = '';
     this.estudioService.obtenerEstudio(this.idBusqueda).subscribe(
      result => {
        if (result.code !== 200) {
            console.log(result);
            this.estudio = result.estudio;
            this.paciente = result.paciente;
            this.resultado = this.estudio.informeResultado;
            this.estudioSearch = 'Encontrado';
        } else {
            this.estudio = result.data;
        }
    },
    error => {
        console.log(<any>error);
        this.errorResponse = error.error.errors;
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
