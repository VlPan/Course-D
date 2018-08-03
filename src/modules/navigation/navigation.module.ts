import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { TodModule } from 'modules/tod/tod.module';
import { TodoModule } from 'modules/todo/todo.module';

import {
  TodNavbarComponent
 } from './components';

import {
  NotFoundPage,
  HomePage,
} from './pages';

import { TodPage } from 'modules/tod/pages';
import { TodoPage } from 'modules/todo/pages';

const routes: Routes = [
  { path: '', component: HomePage, pathMatch: 'full' },
  {
    path: 'tod',
    children: [
       { path: '', component: TodPage },
       // { path: ':id', component: PassengerViewerComponent }
    ]
  },
  {
    path: 'todo',
    children: [
       { path: '', component: TodoPage },
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
    RouterModule.forRoot(routes),
    TodModule,
    TodoModule
  ],
  providers: [],
  exports: [TodNavbarComponent],
  bootstrap: [TodNavbarComponent]
})
export class NavigationModule {}
