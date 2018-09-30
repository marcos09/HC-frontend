import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Patologia } from '../patologia';

@Component({
  selector: 'app-list-patologias',
  templateUrl: './list-patologias.component.html',
  styleUrls: ['./list-patologias.component.css']
})
export class ListPatologiasComponent implements OnInit {

  @Input() public patologias: Patologia[] = [];
  @Output() public delete = new EventEmitter<Patologia>();
  @Output() public edit = new EventEmitter<Patologia>();

  constructor() { }

  ngOnInit() {
  }

  borrarPatologia(patologia: Patologia) {
    this.delete.emit(patologia);
  }

  searchPatologia(patologia: Patologia) {
    this.edit.emit(patologia);
  }
}
