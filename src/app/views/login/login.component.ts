import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent {

  loginForm: FormGroup;

  constructor(private router: Router, private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.loginForm = this.fb.group({
      emailID: ['', Validators.required, Validators.email]
    });
  }

  authenticateUser(e) {
    console.log(e);
    this.router.navigate(['/dashboard']);
  }
}
