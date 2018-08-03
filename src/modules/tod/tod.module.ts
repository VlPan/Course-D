import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { TodPage }  from './pages';

@NgModule({
  declarations: [
    TodPage
  ],
  imports: [
    CommonModule,
    BrowserModule,
  ],
  providers: [],
  exports: [TodPage],
  bootstrap: [TodPage]
})
export class TodModule {}
