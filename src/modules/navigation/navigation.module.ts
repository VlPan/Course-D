import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodNavbarComponent } from './components';

@NgModule({
  declarations: [
    TodNavbarComponent
  ],
  imports: [
    CommonModule,
    BrowserModule
  ],
  providers: [],
  exports: [
    TodNavbarComponent
  ],
  bootstrap: [TodNavbarComponent]
})
export class NavigationModule { }
