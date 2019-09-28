import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AgmCoreModule } from '@agm/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MapaComponent } from './components/mapa/mapa.component';
import { BusquedaComponent } from './pages/busqueda/busqueda.component';
import { LateralBarComponent } from './components/lateral-bar/lateral-bar.component';
import { BajoRiesgoComponent } from './pages/bajo-riesgo/bajo-riesgo.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    HomeComponent,
    MapaComponent,
    BusquedaComponent,
    LateralBarComponent,
    BajoRiesgoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule ,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBeh_MR7yO7QzliNFhgITYzGnn80Dn_q74'
    }),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
