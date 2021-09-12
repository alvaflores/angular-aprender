import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NopagefoundComponent} from './nopagefound/nopagefound.component';
import {PagesRoutingModule} from './pages/pages.routing';
import {AuthRoutingModule} from './auth/auth.routing';
import {DashboardComponent} from './pages/dashboard/dashboard.component';

const routes: Routes = [

  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: '**', component: NopagefoundComponent}
];


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes),
  PagesRoutingModule,
    AuthRoutingModule
  ],

  exports: [RouterModule]
})
export class AppRoutingModule { }
