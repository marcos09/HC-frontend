import { Component, OnInit } from '@angular/core';
import { PatologiaService } from '../patologia.service';
import { Patologia } from '../patologia';

@Component({
  selector: 'app-patologias',
  templateUrl: './patologias.component.html',
  styleUrls: ['./patologias.component.css']
})

export class PatologiasComponent implements OnInit {

  constructor(private patologiaService: PatologiaService) { }

  patologia: Patologia = new Patologia();
  patologias: Patologia[] = [];
  patologiaEdit = false;

  ngOnInit() {
    this.patologiaEdit = false;
    this.patologiaService.getPatologias().subscribe(data => this.patologias = data);
  }

  saveOperation() {
    console.log(this.patologia);
    this.patologiaService.crear(this.patologia).subscribe();
    this.patologia = new Patologia();
    this.patologiaService.getPatologias().subscribe(data => this.patologias = data);
  }

  removePatologia(id: Number) {
    console.log(this.patologia);
    this.patologiaService.eliminar(id).subscribe();
    this.patologia = new Patologia();
    this.patologiaService.getPatologias().subscribe(data => this.patologias = data);
  }

  searchPatologia(id: Number) {
    this.patologiaEdit = true;
    this.patologia = new Patologia();
    console.log( 'Search pacient' );
     this.patologiaService.obtenerPatologia(id).subscribe(
      result => {
        if (result.code !== 200) {
            console.log(result);
            this.patologia = result;
            console.log(this.patologia);
        } else {
            this.patologia = result.data;
        }
    },
    error => {
        console.log(<any>error);
    }

     );
  }

  editPatologia(patologia: Patologia) {
    console.log(this.patologia);
    this.patologiaService.editar(patologia).subscribe();
    this.patologia = new Patologia();
    this.patologiaService.getPatologias().subscribe(data => this.patologias = data);
    this.patologiaEdit = false;
  }



}
