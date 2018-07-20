import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { UserControllerComponent } from './user/user-controller.component';
import {UserService} from './services/user.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TitleComponent } from './lib/components/nav/title.component';
import { ComponentsModule } from './lib/components/components.module';
import { HomeModule } from './views/home/home.module';
import { NotFoundModule } from './views/not-found/not-found.module';
import { NewComponent } from './views/user/new.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    UserControllerComponent,
    TitleComponent,
    NewComponent
  ],
  imports: [AppRoutingModule,
    BrowserModule, // Módulo para la presentacion en el navegador
    ComponentsModule,
    FormsModule,
    HomeModule,
    HttpClientModule,
    NotFoundModule
  ],


  providers: [UserService, HttpClient],
  bootstrap: [AppComponent],
  exports: [NewComponent]
})
export class AppModule { }
