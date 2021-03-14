import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login//login.component';
import { MainPageComponent } from './main-page/main-page.component';
import { TicketreserveComponent } from './ticketreserve/ticketreserve.component';
import {BuyInfoComponent} from './buy-info/buy-info.component'

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: LoginComponent },
  {
    path: 'main', component: MainPageComponent,
  },
  { path: 'reserve/:id', component: TicketreserveComponent },
  { path: 'buyInfo/:x/:y', component: TicketreserveComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
