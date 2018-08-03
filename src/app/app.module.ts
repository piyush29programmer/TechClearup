import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router'
import { AppComponent } from './app.component';

import { appRoutes } from './app-routes';
import { HomeComponent } from './home/home.component';
import { TechnologyModule } from './technology/technology.module';
import { NavBarComponent } from './home/navigation/nav-bar.component';
import { FooterBarComponent } from './home/footer-bar/footer-bar.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    FooterBarComponent
  ],
  imports: [
    BrowserModule,
    TechnologyModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

