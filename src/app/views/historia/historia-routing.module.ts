import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IngresoComponent } from './ingreso/ingreso.component';
import { DetalleComponent } from './detalle/detalle.component';
import { NuevoSeguimientoComponent } from './seguimiento/nuevo-seguimiento/nuevo-seguimiento.component';

const routes: Routes = [
  {
    path: 'altaPaciente',
    component: IngresoComponent,
  },
  {
    path: 'detalle',
    component: DetalleComponent,
  },
  {
    path: 'seguimiento',
    component: NuevoSeguimientoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HistoriaRoutingModule { }
