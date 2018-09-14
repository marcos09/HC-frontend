import { Component, OnInit, Input } from '@angular/core';
import { Seguimiento } from './seguimiento';

@Component({
  selector: 'app-seguimiento',
  templateUrl: './seguimiento.component.html',
})
export class SeguimientoComponent implements OnInit {

  @Input() public seguimiento: Seguimiento;
  constructor() { }

  ngOnInit() {

  }


}
