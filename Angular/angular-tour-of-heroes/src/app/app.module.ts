import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { FormsModule } from '@angular/forms';
import { HeroComponent } from './hero/hero.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroesActionsComponent } from './heroes-actions/heroes-actions.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroComponent,
    HeroDetailComponent,
    HeroesActionsComponent
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
