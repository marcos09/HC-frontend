import { Component, OnInit, Input } from '@angular/core';
import { PatologiaService } from './patologia.service';
import { Patologia } from './patologia';
import { Router } from '@angular/router';
@Component({
  selector: 'app-patologias',
  templateUrl: './patologias.component.html',
  styleUrls: ['./patologias.component.css']
})

export class PatologiasComponent implements OnInit {

  constructor(private patologiaService: PatologiaService, private router: Router) { }

  patologia: Patologia = new Patologia();
  public patologias: Patologia[] = [];
  patologiaEdit = false;
  idBusqueda: Number;

  ngOnInit() {
    this.patologiaEdit = false;
    this.patologiaService.getPatologias().subscribe(data => this.patologias = data);
    console.log(this.patologias);
  }

  onBack() {
    this.router.navigate(['/patologias']);
    this.ngOnInit();
  }
  saveOperation(patologia: Patologia ) {
    console.log(patologia);
    this.patologiaService.crear(patologia).subscribe();
    this.patologias.push(patologia);
    this.patologiaService.getPatologias().subscribe(data => this.patologias = data);
    this.ngOnInit();
  }

  removePatologia(patologia: Patologia) {
    console.log(patologia);
    this.idBusqueda = patologia.id;
    console.log(patologia.id);
    this.patologiaService.eliminar(this.idBusqueda).subscribe();
    this.patologias.splice(this.patologias.indexOf(patologia), 1);
    // this.patologiaService.getPatologias().subscribe(data => this.patologias = data);
  }

  searchPatologia(patologia: Patologia) {
    this.patologiaEdit = true;
    this.idBusqueda = patologia.id;
    this.patologia = new Patologia();
    console.log( 'Search pacient' );
     this.patologiaService.obtenerPatologia(this.idBusqueda).subscribe(
      result => {
        if (result.code !== 200) {
            console.log(result);
            this.patologia = result.body;
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
    console.log(patologia);
    this.patologias.splice(this.patologias.indexOf(patologia), 1);
    this.patologiaService.editar(patologia).subscribe();
    this.patologia = new Patologia();
    this.patologias.push(patologia);
    this.patologiaService.getPatologias().subscribe(
        data => this.patologias = data,
        result => {
          if (result.code !== 200) {
              console.log(result);
          } else {
            console.log(result);
          }
        }
     );
    this.patologiaEdit = false;
    this.router.navigateByUrl('/RefrshComponent', {skipLocationChange: true}).then(() => this.router.navigate(['/patologias']));
  }



}
