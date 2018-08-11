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
  ngOnInit() {
    this.patologiaService.getPatologias().subscribe(data => this.patologias = data);
  }

  saveOperation() {
    console.log(this.patologia);
    this.patologiaService.crear(this.patologia).subscribe();
    this.patologia = new Patologia();
    this.patologiaService.getPatologias().subscribe(data => this.patologias = data);
  }

}
