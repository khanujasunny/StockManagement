import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { PublicService } from './public/public.service';
import {globalConfig} from './common/utils/utils';

@Component({
  // tslint:disable-next-line
  selector: 'body',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

  licenseStatus = null; // 'EXPIRED',  'VALID',  'INVALIDATE_IN_30', 'CHECKING' , 'EXCEPTION';
  constructor(private router: Router, private service: PublicService) {
    // check for license key

    service.validateLicenseKey().subscribe((data: any) => {
      if (data.status === 200) {
        // check expiry data for multiple scenario's
        globalConfig.settings = data.data;
        const today = new Date();
        if(this.getDateDiff(today, new Date(data.data.licenseExpieryDate)) < 1){
          this.licenseStatus = 'EXPIRED';
        } else if(this.getDateDiff(today, new Date(data.data.licenseExpieryDate)) > 30){
          this.licenseStatus = 'VALID'
        } else if(this.getDateDiff(today, new Date(data.data.licenseExpieryDate)) < 30){
          this.licenseStatus = 'INVALIDATE_IN_30'
        }
      }
    });

  }

  getDateDiff(toDate: any ,fromDate: any){
    // const today = new Date('2021-12-16T19:10:16.617Z');
    const diffTime = fromDate - toDate;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
    return diffDays;
  }

  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
  }
}
