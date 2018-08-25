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
  declarations: [IngresoComponent, SeguimientoComponent, DetalleComponent, EstudioComponent, NuevoSeguimientoComponent, PacienteComponent]
})
export class HistoriaModule { }
