import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './views/not-found/not-found/not-found.component';
import { HomeComponent } from './views/home/home/home.component';
import { NewComponent } from './views/user/new.component';
import { InternacionesComponent } from './views/internaciones/internaciones.component';
import { PrescripcionComponent } from './views/prescripcion/prescripcion.component';
import { PatologiasComponent } from './views/patologias/patologias/patologias.component';
import { MedicamentosComponent } from './views/medicamentos/medicamentos.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'usuarios',
    component: NewComponent
  },

  {
    path: 'historias',
    loadChildren: './views/historia/historia.module#HistoriaModule'

  },
  {
    path: 'internaciones',
    component: InternacionesComponent
  }
  ,
  {
    path: 'patologias',
    component: PatologiasComponent
  },
  {
    path: 'prescripciones',
    component: PrescripcionComponent
  },
  {
    path: 'medicamentos',
    component: MedicamentosComponent
  },
  {
    path: '404',
    component: NotFoundComponent
  },
  {
    path: '**',
    redirectTo: '/404'
  }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
