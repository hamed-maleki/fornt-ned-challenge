import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { MainPageComponent } from './main-page/main-page.component';
import { TicketreserveComponent } from './ticketreserve/ticketreserve.component';
import { HeaderComponent } from './header/header.component';
import { BuyInfoComponent } from './buy-info/buy-info.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainPageComponent,
    TicketreserveComponent,
    HeaderComponent,
    BuyInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
