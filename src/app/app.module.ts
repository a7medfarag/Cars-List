import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarListingComponent } from './components/car-listing/car-listing.component';
import { NavbarComponentComponent } from './sharedComponents/navbar-component/navbar-component.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SortpipePipe } from './core/pipes/sortpipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CarListingComponent,
    NavbarComponentComponent,
    SortpipePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [SortpipePipe],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
