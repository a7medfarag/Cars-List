import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarListingComponent } from './components/car-listing/car-listing.component';

const routes: Routes = [
  {path:'' , component: CarListingComponent , pathMatch: 'full'},
  {path:'car-list' , component: CarListingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
