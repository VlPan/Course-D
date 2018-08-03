import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { TodoPage } from './pages';

@NgModule({
  declarations: [
    TodoPage
  ],
  imports: [
    CommonModule,
    BrowserModule,
  ],
  providers: [],
  exports: [TodoPage],
  bootstrap: [TodoPage]
})
export class TodoModule {}
