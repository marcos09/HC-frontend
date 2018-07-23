import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IngresoComponent } from './ingreso/ingreso.component';

const routes: Routes = [
  {
    path: 'altaPaciente',
    component: IngresoComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HistoriaRoutingModule { }
