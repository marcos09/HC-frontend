import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { BrowserModule } from '@angular/platform-browser';
import { ComponentsModule } from './lib/components/components.module';
import { CookieService } from 'ngx-cookie-service';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgModule} from '@angular/core';
import {
  HttpClientModule,
  HttpClient,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { HomeModule } from './views/home/home.module';
import { NotFoundModule } from './views/not-found/not-found.module';
import { TokenInterceptorService } from './token-interceptor.service';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { TabsModule } from 'ngx-bootstrap/tabs';
import {
  AppAsideModule,
  AppBreadcrumbModule,
  AppHeaderModule,
  AppFooterModule,
  AppSidebarModule
} from '@coreui/angular';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { PrescripcionComponent } from './views/prescripcion/prescripcion.component';
import { MedicamentosComponent } from './views/medicamentos/medicamentos.component';
import { InternacionesComponent } from './views/internaciones/internaciones.component';
import { PatologiasComponent } from './views/patologias/patologias.component';
import { NuevoMedicamentoComponent } from './views/medicamentos/nuevo-medicamento/nuevo-medicamento.component';
import { ListadoMedicamentoComponent } from './views/medicamentos/listado-medicamento/listado-medicamento.component';
import { UsuarioService } from './views/usuarios/usuario.service';
import { UsuariosModule } from './views/usuarios/usuarios.module';
import { NuevaPatologiaComponent } from './views/patologias/nueva-patologia/nueva-patologia.component';
import { ListPatologiasComponent } from './views/patologias/list-patologias/list-patologias.component';
import { ReportesComponent } from './views/reportes/reportes.component';
import { LineChartComponent } from './views/reportes/line-chart/line-chart.component';
import { ChartsModule } from 'ng2-charts';
import { PiechartComponent } from './views/reportes/piechart/piechart.component';
import { BarchartComponent } from './views/reportes/barchart/barchart.component';
import { GraficoComponent } from './views/reportes/grafico/grafico.component';
import { Piechart2Component } from './views/reportes/piechart2/piechart2.component';


const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

@NgModule({
  declarations: [
    AppComponent,
    PrescripcionComponent,
    MedicamentosComponent,
    InternacionesComponent,
    PatologiasComponent,
    NuevoMedicamentoComponent,
    ListadoMedicamentoComponent,
    ListPatologiasComponent,
    NuevaPatologiaComponent,
    ReportesComponent,
    LineChartComponent,
    PiechartComponent,
    BarchartComponent,
    GraficoComponent,
    Piechart2Component
  ],

  imports: [
    AppRoutingModule,
    AppAsideModule,
    AppBreadcrumbModule.forRoot(),
    AppFooterModule,
    AppHeaderModule,
    AppSidebarModule,
    BrowserModule, // Módulo para la presentacion en el navegador
    ComponentsModule,
    ChartsModule,
    FlashMessagesModule.forRoot(), // Módulo para las alertas
    FormsModule,
    HomeModule,
    HttpClientModule,
    NotFoundModule,
    PerfectScrollbarModule,
    ReactiveFormsModule,
    TabsModule.forRoot(),
    UsuariosModule
  ],
  providers: [
    UsuarioService,
    HttpClient,
    CookieService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    },
  ],
  bootstrap: [AppComponent],
  exports: [PrescripcionComponent]
})
export class AppModule {}
