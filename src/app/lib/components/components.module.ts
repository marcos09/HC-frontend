import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import {AppAsideModule, AppBreadcrumbModule, AppHeaderModule, AppFooterModule, AppSidebarModule, } from '@coreui/angular';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { LeftPanelComponent} from './left-panel/left-panel.component';

@NgModule({
  imports: [
    CommonModule,
    BsDropdownModule.forRoot(),
    ChartsModule,
    AppHeaderModule,
    AppFooterModule,

  ],
  declarations: [NavComponent, FooterComponent, LeftPanelComponent],
  exports: [FooterComponent, NavComponent]
})
export class ComponentsModule { }
