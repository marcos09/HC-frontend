import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {
  HttpClientModule,
  HttpClient,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { TitleComponent } from './lib/components/nav/title.component';
import { ComponentsModule } from './lib/components/components.module';
import { HomeModule } from './views/home/home.module';
import { NotFoundModule } from './views/not-found/not-found.module';
import { FormsModule } from '@angular/forms';
import { TokenInterceptorService } from './token-interceptor.service';
import { CookieService } from 'ngx-cookie-service';
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
import { PatologiasComponent } from './views/patologias/patologias/patologias.component';
import { NuevoMedicamentoComponent } from './views/medicamentos/nuevo-medicamento/nuevo-medicamento.component';
import { ListadoMedicamentoComponent } from './views/medicamentos/listado-medicamento/listado-medicamento.component';
import { UsuarioService } from './views/usuarios/usuario.service';
import { UsuariosModule } from './views/usuarios/usuarios.module';
import { NuevaPatologiaComponent } from './views/patologias/patologias/nueva-patologia/nueva-patologia.component';
import { ListPatologiasComponent } from './views/patologias/patologias/list-patologias/list-patologias.component';


const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    PrescripcionComponent,
    MedicamentosComponent,
    InternacionesComponent,
    PatologiasComponent,
    NuevoMedicamentoComponent,
    ListadoMedicamentoComponent,
    ListPatologiasComponent,
    NuevaPatologiaComponent
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
    FormsModule,
    HomeModule,
    HttpClientModule,
    NotFoundModule,
    PerfectScrollbarModule,
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
