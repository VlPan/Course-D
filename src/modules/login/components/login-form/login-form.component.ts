import { Component, Output, EventEmitter, OnInit, AfterContentInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';


export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginForm implements OnInit, AfterContentInit {

  title = 'login Form';

  constructor(private loginService: LoginService) {}
  @Output() submitted: EventEmitter <any> = new EventEmitter();

  emailFormControl: FormControl;
  passwordFormControl: FormControl;
  matcher: MyErrorStateMatcher;



  ngOnInit() {
    this.loginService.loginUser('vlpan', '123qws').subscribe((user: any) => {
      alert(user);
    });
  }

  ngAfterContentInit(): void {
    console.log('after content init');
    this.emailFormControl = new FormControl('', [
      Validators.required,
      Validators.email,
    ]);
    this.passwordFormControl = new FormControl('', [
      Validators.required,
      Validators.minLength(6)
    ]);
    this.matcher = new MyErrorStateMatcher();
  }

  submit(event) {
    this.submitted.emit(event);
  }

}
