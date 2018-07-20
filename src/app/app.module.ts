import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from "./app-routing.module";
import { UserControllerComponent } from './user-controller/user-controller.component';
import { Routes, RouterModule } from "@angular/router";
import {UserService} from './services/user.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TitleComponent } from './lib/components/nav/title.component';
import { ComponentsModule } from "./lib/components/components.module";
import { HomeModule } from "./views/home/home.module";
import { NotFoundModule } from './views/not-found/not-found.module';

const routes: Routes = [
  {
    path: "",
    component: AppComponent
  }];

@NgModule({
  declarations: [
    AppComponent,
    UserControllerComponent,
    TitleComponent
  ],
  imports: [AppRoutingModule,
    BrowserModule, //Módulo para la presentacion en el navegador
    ComponentsModule,
    HomeModule,
    HttpClientModule,
    NotFoundModule
  ],


  providers: [UserService, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
