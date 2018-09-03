import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Estudio } from '../estudio';

@Component({
  selector: 'app-nuevo-estudio',
  templateUrl: './nuevo-estudio.component.html',
  styleUrls: ['./nuevo-estudio.component.css']
})
export class NuevoEstudioComponent implements OnInit {

  public estudio = new Estudio();

  constructor() { }
  @Output() public save = new EventEmitter<Estudio>();

  saveOperation() {
    this.save.emit(this.estudio);
  }
  ngOnInit() {
  }

}
