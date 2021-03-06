import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ProgressComponent} from './progress/progress.component';
import {Grafica1Component} from './grafica1/grafica1.component';
import {SharedModule} from '../shared/shared.module';
import {AppRoutingModule} from '../app-routing.module';
import {PagesComponent} from '../pages.component';
import { FormsModule } from '@angular/forms';
import {ComponentsModule} from '../components/components.module';

import { ChartsModule } from 'ng2-charts';
//import { ChartsModule } from 'ng2-charts/ng2-charts';

@NgModule({
  declarations: [
    DashboardComponent,
    ProgressComponent,
    Grafica1Component,
    PagesComponent
  ],
  exports: [
    DashboardComponent,
    ProgressComponent,
    Grafica1Component,
    PagesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    AppRoutingModule,
    ComponentsModule,
    ChartsModule
  ],
})
export class PagesModule { }
