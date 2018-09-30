import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Patologia } from '../patologia';

@Component({
  selector: 'app-nueva-patologia',
  templateUrl: './nueva-patologia.component.html',
  styleUrls: ['./nueva-patologia.component.css']
})
export class NuevaPatologiaComponent implements OnInit {

  public patologia: Patologia = new Patologia();

  @Output() public addPatologia = new EventEmitter<Patologia>();

  constructor() { }

  ngOnInit() {
  }

  saveOperation() {
    this.addPatologia.emit(this.patologia);
    this.patologia = new Patologia();
  }

}
