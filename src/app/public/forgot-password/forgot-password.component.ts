import { Component, OnInit } from '@angular/core';
import { PublicService } from '../public.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html'
})
export class ForgotPasswordComponent implements OnInit {
  errorMessage: any;
  successMessage: any;

  constructor(private router: Router, private service: PublicService) {
    if (service.getFromLocal('LOGIN_INFO')) {
      this.router.navigate(['/dashboard']);
    }
  }

  ngOnInit() {


  }

  forgetPassword(e: any) {
    console.log(e);
    this.errorMessage = null;
    this.successMessage = null;
    this.service.forgetPassword(e.data).subscribe(
      (data: any) => {
        if (data.status !== 200) {
          this.errorMessage = data.message;
        } else {
          this.successMessage = data.message;
        }
      },
      err => console.error(err),
      () => console.log('done with login')
    );
  }

}
