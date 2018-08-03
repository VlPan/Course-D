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
      link: '/',
      name: 'Home',
      exact: true
    },
    {
      link: '/tod',
      name: 'TOD',
      exact: true
    },
    {
      link: '/todo',
      name: 'TODO',
      exact: true
    },
    {
      link: '/oops',
      name: '404',
      exact: false
    }
  ];
}
