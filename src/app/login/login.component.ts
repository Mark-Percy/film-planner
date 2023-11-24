import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  createUser: boolean = false 
  loginForm: FormGroup;
  constructor(private fb: FormBuilder, private authService: AuthenticationService) {
    this.loginForm = this.fb.group({
      email: '',
      password: '',
    })
  }

  submitForm() {
    if(this.createUser) {
      this.createUsersubmit()
    } else {
      this.signin()
    }
  }
  createUsersubmit() {
    if(this.loginForm.value.email && this.loginForm.value.password) this.authService.createAccount(this.loginForm.value.email, this.loginForm.value.password)
  }

  signin() {
    if(this.loginForm.value.email && this.loginForm.value.password) this.authService.signin(this.loginForm.value.email, this.loginForm.value.password)
  }
}
