import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './pages';
import { RouterModule, Routes } from '@angular/router';

import { CommonModule } from '@angular/common';

import {NavigationModule} from 'modules/navigation/navigation.module';
import { routes } from './app.routes';
import { LayoutPage } from './pages';

@NgModule({
  declarations: [
    AppComponent,
    LayoutPage
  ],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule.forRoot(routes),
    NavigationModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
