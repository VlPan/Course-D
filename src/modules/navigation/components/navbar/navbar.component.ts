import { Component } from '@angular/core';

interface Nav {
  link: string;
  name: string;
  exact: boolean;
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class TodNavbarComponent {
  nav: Nav[] = [
    {
      link: '/home',
      name: 'Home',
      exact: true
    },
    {
      link: '/home/product-manager',
      name: 'Product-manager',
      exact: true
    },
    {
      link: '/home/login',
      name: 'Login',
      exact: true
    },
    {
      link: '/oops',
      name: '404',
      exact: false
    }
  ];
}
