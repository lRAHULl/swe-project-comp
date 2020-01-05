import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HerosComponent } from './heros/heros.component';
import { ActorsComponent } from './actors/actors.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CompoundInterestCalculatorComponent } from './compound-interest-calculator/compound-interest-calculator.component';

@NgModule({
  declarations: [
    AppComponent,
    HerosComponent,
    ActorsComponent,
    NavbarComponent,
    CompoundInterestCalculatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
