import { Component, Output, EventEmitter, OnInit, AfterContentInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { UserFieldsToLogin } from '../../models';


export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

export class MyErrorStateMatcherForUpdate implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && isSubmitted);
  }
}

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginForm implements AfterContentInit {

  constructor(private loginService: LoginService) {}
  @Output() submitted: EventEmitter <any> = new EventEmitter();

  emailFormControl: FormControl;
  passwordFormControl: FormControl;
  nameFormControl: FormControl;
  matcher: MyErrorStateMatcher;


  ngAfterContentInit(): void { 
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

  submit() {
    const email = this.emailFormControl.value;
    const password = this.passwordFormControl.value;
    const user: UserFieldsToLogin = {email, password}
    this.submitted.emit(user);
  }

}
