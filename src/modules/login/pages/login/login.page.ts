import { Component } from '@angular/core';
import { LoginService } from '../../services';
import { Store } from '@ngrx/store';
import { LoginState } from './../../store/reducers/login.reducer';
import { LoginUser } from '../../store';
import { UserFieldsToLogin } from '../../models';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage {

  constructor(private loginService: LoginService, private store: Store<LoginState>) {}

  public login(userFields: UserFieldsToLogin) {
    
    this.store.dispatch(new LoginUser(userFields));
    // this.loginService.loginUser('vlpan@gmail.com', '1q2w3ev').subscribe((user: any) => {
    //   alert(user);
    // });
    
  }

}
