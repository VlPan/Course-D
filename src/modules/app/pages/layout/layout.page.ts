import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './../../../login/services/login.service';

@Component({selector: 'app-layout', templateUrl: './layout.page.html', styleUrls: ['./layout.page.scss']})
export class LayoutPage {
    title = 'lAYOUT';
    constructor(private router: Router, private loginService: LoginService) {

    }

    goToHome() {
      this.router.navigate(['/home']);
    }
}
