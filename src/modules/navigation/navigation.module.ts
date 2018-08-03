import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import {
  TodNavbarComponent
 } from './components';

import {
  NotFoundPage,
  HomePage
} from './pages';

const routes: Routes = [
  { path: '', component: HomePage, pathMatch: 'full' },
  {
    path: 'tod',
    children: [
      //  { path: '', component: PassengerDashboardComponent },
      //  { path: ':id', component: PassengerViewerComponent }
    ]
  },
  {
    path: 'todo',
    children: [
      //  { path: '', component: PassengerDashboardComponent },
      //  { path: ':id', component: PassengerViewerComponent }
    ]
  },
  { path: '**', component: NotFoundPage },
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
    RouterModule.forRoot(routes)],
  providers: [],
  exports: [TodNavbarComponent],
  bootstrap: [TodNavbarComponent]
})
export class NavigationModule {}
