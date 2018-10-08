import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetalleComponent } from './detalle/detalle.component';
import { NuevoSeguimientoComponent } from './seguimiento/nuevo-seguimiento/nuevo-seguimiento.component';
import { EgresoComponent } from './egreso/egreso.component';
import { ResultadoComponent } from './estudio/resultado/resultado.component';
import { PendientesComponent } from './estudio/pendientes/pendientes.component';
import { CrearIngresoComponent } from './ingreso/crear-ingreso/crear-ingreso.component';

const routes: Routes = [
  {
    path: 'altaPaciente',
    component: CrearIngresoComponent,
  },
  {
    path: 'detalle/:idHistoria',
    component: DetalleComponent,
  },
  {
    path: 'seguimiento',
    component: NuevoSeguimientoComponent
  }
,
  {
    path: 'egreso',
    component: EgresoComponent
  }
  ,
  {
    path: 'estudio/cargarResultado',
    component: ResultadoComponent
  },
  {
    path: 'estudio/pendientes',
    component: PendientesComponent
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HistoriaRoutingModule { }
