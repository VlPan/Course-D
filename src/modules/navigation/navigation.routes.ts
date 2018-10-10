import {
  NotFoundPage,
  HomePage,
} from './pages';
import { ProductManagerPage } from '../product-manager/pages';
import { LoginPage } from '../login/pages';
import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: 'home', component: HomePage, children: [
    {
      path: 'product-manager',
      component: ProductManagerPage
    },
    {
      path: 'login',
      component: LoginPage
    }
  ]
  }
];