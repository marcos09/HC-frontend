import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HistoriaRoutingModule } from './historia-routing.module';
import { IngresoComponent } from './ingreso/ingreso.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HistoriaRoutingModule,

  ],
  declarations: [IngresoComponent]
})
export class HistoriaModule { }
