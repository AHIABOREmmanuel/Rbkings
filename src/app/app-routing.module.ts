import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { APROPOSComponent } from './components/apropos/apropos.component';
import { MenuComponent } from './components/menu/menu.component';
import { ReservationComponent } from './components/reservation/reservation.component';
import { ContactComponent } from './components/contact/contact.component';
import { GalerieComponent } from './components/galerie/galerie.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'about', component: APROPOSComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'reservation', component: ReservationComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'gallery', component: GalerieComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
