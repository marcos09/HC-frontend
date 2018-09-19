import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatologiasComponent } from './patologias/patologias.component';
import { NuevaPatologiaComponent } from './patologias/nueva-patologia/nueva-patologia.component';
import { ListPatologiasComponent } from './patologias/list-patologias/list-patologias.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PatologiasComponent
    , ListPatologiasComponent, NuevaPatologiaComponent
  ]
})
export class PatologiasModule { }
