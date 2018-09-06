import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { NgxGalleryModule } from 'ngx-gallery';
import { HistoriaRoutingModule } from './historia-routing.module';
import { IngresoComponent } from './ingreso/ingreso.component';
import { FormsModule } from '@angular/forms';
import { SeguimientoComponent } from './seguimiento/seguimiento.component';
import { DetalleComponent } from './detalle/detalle.component';
import { EstudioComponent } from './estudio/estudio.component';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { NuevoSeguimientoComponent } from './seguimiento/nuevo-seguimiento/nuevo-seguimiento.component';
import { AlertModule } from 'ngx-bootstrap/alert';
import { PacienteComponent } from './paciente/paciente.component';
import { NuevoEstudioComponent } from './estudio/crear/nuevo-estudio/nuevo-estudio.component';
import { ListadoComponent } from './estudio/crear/listado/listado.component';
import { CrearComponent } from './estudio/crear/crear.component';
import { PrescripcionComponent } from './prescripcion/prescripcion.component';
import { CrearPrescripcionComponent } from './prescripcion/crear-prescripcion/crear-prescripcion.component';
import { NuevaPrescripcionComponent } from './prescripcion/crear-prescripcion/nueva-prescripcion/nueva-prescripcion.component';
import { ListadoPrescripcionComponent } from './prescripcion/listado-prescripcion/listado-prescripcion.component';
import { EgresoComponent } from './egreso/egreso.component';

@NgModule({
  imports: [
    AlertModule,
    BsDropdownModule,
    ChartsModule,
    CommonModule,
    FormsModule,
    HistoriaRoutingModule,
    NgxGalleryModule,
    TabsModule,
  ],
  declarations: [IngresoComponent, SeguimientoComponent, DetalleComponent, EstudioComponent,
     NuevoSeguimientoComponent, PacienteComponent, NuevoEstudioComponent,
     ListadoComponent, CrearComponent, PrescripcionComponent, NuevaPrescripcionComponent,
     CrearPrescripcionComponent, ListadoPrescripcionComponent, EgresoComponent]
})
export class HistoriaModule { }
