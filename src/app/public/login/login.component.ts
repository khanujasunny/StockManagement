import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PublicService } from '../public.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent {

  errorMessage: string;
  constructor(private router: Router, private service: PublicService) {
    // if user is authenticated, redirect to Dashboard
    if (service.getFromLocal('LOGIN_INFO')) {
      this.router.navigate(['/dashboard']);
    }
  }

  authenticateUser(e: any) {
    console.log(e);
    this.errorMessage = null;
    this.service.authenticateUser(e.data).subscribe(
      (data: any) => {
        if (data.status !== 200) {
          this.errorMessage = data.message;
        } else {
          this.service.saveInLocal('LOGIN_INFO', data.data);
          // console.info(this.service.getFromLocal('LOGIN_INFO'));
          this.router.navigate(['/dashboard']);
        }
      },
      err => console.error(err),
      () => console.log('done with login')
    );
  }
}
