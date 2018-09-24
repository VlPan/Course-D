import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';


import {
  TodNavbarComponent
 } from './components';

import {
  NotFoundPage,
  HomePage,
} from './pages';

import { ProductManagerPage } from '../product-manager/pages';
import { LoginPage } from '../login/pages';
import { LoginModule } from './../login/login.module';
import { ProductManagerModule } from './../product-manager/product-manager.module';

const routes: Routes = [
  { path: 'home', component: HomePage, children: [
    {
      path: 'product-manager',
      component: ProductManagerPage
    },
    {
      path: 'login',
      component: LoginPage
    },
  ]
  }
];

@NgModule({
  declarations: [
    TodNavbarComponent,
    NotFoundPage,
    HomePage
  ],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes),
    LoginModule,
    ProductManagerModule
  ],
  providers: [],
  exports: [TodNavbarComponent],
  bootstrap: [HomePage]
})
export class NavigationModule {}
