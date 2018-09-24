import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { LoginPage } from './pages';
import { FormsModule } from '@angular/forms';
import { LoginForm } from './components';


@NgModule({
  declarations: [
    LoginPage,
    LoginForm
  ],
  imports: [
  CommonModule,
    BrowserModule,
    FormsModule
  ],
  providers: [],
  exports: [LoginPage],
  bootstrap: [LoginPage]
})
export class LoginModule {}
