import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IngresoComponent } from './ingreso/ingreso.component';
import { DetalleComponent } from './detalle/detalle.component';

const routes: Routes = [
  {
    path: 'altaPaciente',
    component: IngresoComponent,
  },
  {
    path: 'detalle',
    component: DetalleComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HistoriaRoutingModule { }
