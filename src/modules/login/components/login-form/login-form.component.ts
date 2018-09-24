import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginForm implements OnInit{

  title = 'login Form';

  constructor(private loginService: LoginService) {

  }
  @Output() submitted: EventEmitter <any> = new EventEmitter();

  ngOnInit() {
    this.loginService.loginUser('vlpan', '123qws').subscribe((user: any) => {
      alert(user);
    });
  }

  submit(event) {
    this.submitted.emit(event);
  }

}
