import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { BusquedaComponent } from './pages/busqueda/busqueda.component';
import { RiesgoComponent } from './pages/riesgo/riesgo.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'busqueda', component: BusquedaComponent },
  { path: 'riesgo', component: RiesgoComponent },
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
