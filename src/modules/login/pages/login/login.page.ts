import { Component } from '@angular/core';
import { LoginService } from '../../services';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage {

  constructor(private loginService: LoginService) {}

  public login(login: any) {
    this.loginService.loginUser('vlpan@gmail.com', '1q2w3ev').subscribe((user: any) => {
      alert(user);
    });
  }

}
